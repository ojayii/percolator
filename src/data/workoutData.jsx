// src/data/workoutData.js
const workouts = [
    {
        id: "1",
        title: "Full Body HIIT",
        video_src: "https://www.youtube.com/embed/UBMk30rjy0o",
        thumbnail: "https://i.ytimg.com/vi/UBMk30rjy0o/maxresdefault.jpg",
        duration: 600,
        num_tasks: 5,
        steps: [
            { step: 1, instruction: "Jumping Jacks – 60 seconds" },
            { step: 2, instruction: "Squats – 15 reps" },
            { step: 3, instruction: "Push-ups – 10 reps" },
            { step: 4, instruction: "Burpees – 12 reps" },
            { step: 5, instruction: "Plank – 30 seconds" },
        ],
        equipment: ["Bodyweight"],
    },
    {
        id: "2",
        title: "Dumbbell Strength",
        video_src: "https://www.youtube.com/embed/4dvhtIcRIaI",
        thumbnail: "https://i.ytimg.com/vi/4dvhtIcRIaI/maxresdefault.jpg",
        duration: 900,
        num_tasks: 5,
        steps: [
            { step: 1, instruction: "Dumbbell Squat – 12 reps" },
            { step: 2, instruction: "Overhead Press – 10 reps" },
            { step: 3, instruction: "Bicep Curl – 12 reps" },
            { step: 4, instruction: "Deadlift – 10 reps" },
            { step: 5, instruction: "Dumbbell Row – 12 reps" },
        ],
        equipment: ["Dumbbells"],
    },
    {
        id: "3",
        title: "Yoga Flow",
        video_src: "https://www.youtube.com/embed/v7AYKMP6rOE",
        thumbnail: "https://i.ytimg.com/vi/v7AYKMP6rOE/maxresdefault.jpg",
        duration: 1200,
        num_tasks: 4,
        steps: [
            { step: 1, instruction: "Child’s Pose – 30 seconds" },
            { step: 2, instruction: "Downward Dog – 45 seconds" },
            { step: 3, instruction: "Warrior Pose – 60 seconds" },
            { step: 4, instruction: "Savasana – 2 minutes" },
        ],
        equipment: ["Mat"],
    },
    {
        id: "4",
        title: "Core Crusher",
        video_src: "https://www.youtube.com/embed/1919eTCoESo",
        thumbnail: "https://i.ytimg.com/vi/1919eTCoESo/maxresdefault.jpg",
        duration: 800,
        num_tasks: 4,
        steps: [
            { step: 1, instruction: "Crunches – 20 reps" },
            { step: 2, instruction: "Russian Twists – 15 reps per side" },
            { step: 3, instruction: "Leg Raises – 12 reps" },
            { step: 4, instruction: "Plank – 60 seconds" },
        ],
        equipment: ["Mat"],
    },
    // Add more workouts similarly
];

export default workouts;
