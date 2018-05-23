const Lesson_API_URL =
    'http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic';
let _singleton = Symbol();

export default class TopicService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }


    findAllTopics(courseId, moduleId, lessonId) {
        return fetch(Lesson_API_URL.replace('CID', courseId).replace('MID', moduleId).replace('LID', lessonId))
            .then(function (response) {
                return response.json();
            })
    }


    createTopic(courseId, moduleId, lessonId, topic) {
        return fetch(Lesson_API_URL.replace('CID', courseId).replace('MID', moduleId).replace('LID', lessonId),
            {
                body: JSON.stringify(topic),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            })
            .then(function (response) {
                return response.json();
            })
    }

    // deleteLesson(lessonId) {
    //     return fetch('http://localhost:8080/api/lesson/'+ lessonId,
    //         {
    //             method: 'DELETE'
    //         }).then(function (response) {
    //         return response;
    //     })
    // }
}
