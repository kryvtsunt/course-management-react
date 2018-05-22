const Lesson_API_URL =
    'http://localhost:8080/module/MID/lesson';
let _singleton = Symbol();

export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }


    findAllLessons(moduleId) {
        return fetch(
            Lesson_API_URL
                .replace('MID', moduleId))
            .then(function (response) {
                return response.json();
            })
    }


    createLesson(moduleId, lesson) {
        return fetch(Lesson_API_URL.replace('MID', moduleId),
            {
                body: JSON.stringify(module),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }

    deleteLesson(lessonId) {
        return fetch('http://localhost:8080/api/lesson/'+ lessonId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }
}