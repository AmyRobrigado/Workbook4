"use strict";

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
    ];
    //-------------------------------------------------------

    function getCourseDate(courses, courseId) 
    {
        let numCourse = courses.length;

    for(let i = 0; i < numCourse; i++){

        if (courses[i].CourseId==courseId)
        {
            return courses[i].StartDate // to extract the date of the course 
        }
    }
    }

    console.log(getCourseDate(courses,"PROG200"));

    //-------------------------------------------------------

    function getCourseTitle(courses, courseId) 
    {
        let numCourse = courses.length;

    for(let i = 0; i < numCourse; i++){

        if (courses[i].CourseId==courseId)
        {
            return courses[i].Title // to extract the title of the course 
        }
    }
    }

    console.log(getCourseTitle(courses,"PROJ500"));

    //--------------------------------------------------------
    
    function getCourseFee(courses) 
    {
        let numCourse = courses.length;
        let fifty = [];

        for(let i = 0; i < numCourse; i++)
    {
        if(courses[i].Fee<= 50)
        { 
            fifty.push(courses[i].Title);
        }
    }
        return fifty;
    }

    console.log("The courses that cost $50 or less is " + getCourseFee(courses));     // [i] means index, 

    //----------------------------------------------------------

    function getCourseClass(courses) 
    {
        let numCourse = courses.length;
        let class1 = [];

        for(let i = 0; i < numCourse; i++)
    {
        if(courses[i].Location=="Classroom 1")
        { 
            class1.push(courses[i].Title);
        }
    }
        return class1;
    }
    console.log("The classes that meet in classroom 1 is " + getCourseClass(courses));