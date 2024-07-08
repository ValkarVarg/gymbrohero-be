const { getUser, getUserLogin, postUserLogin, postUser } = require('./controllers/users.controller');
const { getWorkouts, getIndividualWorkout, postNewWorkout, postNewWorkoutPlan, getExercises } = require('./controllers/workouts.controller');

const express = require('express');
const cors = require('cors')


const app = express();

app.use(cors())
app.use(express.json());

app.get('/api/users/:userid', getUser);
app.get('/api/userlogin/:username', getUserLogin);
app.get('/api/workouts/:userid', getWorkouts);
app.get('/api/individualworkouts/:workout_id', getIndividualWorkout);
app.get('/api/exercises', getExercises)

app.post('/api/workouts/:workout_plan_id', postNewWorkout);
app.post('/api/workoutplans', postNewWorkoutPlan)
app.post('/api/userlogin', postUserLogin);
app.post('/api/users/:user_id', postUser);

app.use((err, req, res, next) => {
	if (err.status && err.msg) {
		res.status(err.status).send({ msg: err.msg });
	} else if (err.code) {
		res.status(400).send({ msg: 'Bad Request' });
	} else {
		res.status(500).send({ msg: 'Internal Server Error' });
	}
});

module.exports = app;
