function solve(input) {
    let courses = {};
    for (const line of input) {
        if (line.includes(': ')) {
            let [courseName, capacity] = line.split(': ');
            let value = Number(capacity);

            if (!courses.hasOwnProperty(courseName)) {
                courses[courseName] = { capacity: value };
                courses[courseName].students = [];
            }
            else {
                value += courses[courseName].capacity;
                courses[courseName].capacity = value;
            }
        }
        else if (line.includes('with email')) {
            let [userInfo, courseName] = line.split(' joins ');
            let [user, email] = userInfo.split(" with email ");
            let [userName, credits] = user.split('[');

            if (courses.hasOwnProperty(courseName) && courses[courseName].capacity > 0) {

                courses[courseName].students.push({ userName, credits: Number(credits.slice(0, -1)), email });

                courses[courseName].capacity--;

            }
        }
    }
    let sortedByStudents = Object.entries(courses).sort((a, b) => b[1].students.length - a[1].students.length);
    for (const course of sortedByStudents) {
        console.log(`${course[0]}: ${course[1].capacity} places left`)
        for (const student of course[1].students.sort((a, b) => b.credits - a.credits)) {
            console.log(`--- ${student.credits}: ${student.userName}, ${student.email}`)
        }
    }
}

solve([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore']);