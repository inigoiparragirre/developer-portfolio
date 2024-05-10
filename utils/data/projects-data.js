import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Financial Web App for Equity Bank customers',
        description: "Me and my team built an Web application for Equity Bank customers. I was an Angular Developer and developed diverse financial products for customers.",
        tools: ['Angular', 'Jest', 'Angular Material', 'RxJS'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Mobile and Web app for Basque Country University',
        description: 'I designed and developed a full-stack mobile and web app for the Basque Country University for students',
        tools: ['Angular', 'Spring Boot', "Typescript", "Java", "Ionic", "MySQL", "Oauth2"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'R&D Project for Devops in Tecnalia Research Center',
        description: 'I worked as a Devops developer in Tecnalia using Jenkins, Docker, Kubernetes, and AWS to deploy and maintain the R&D projects',
        tools: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'GitlabCI', 'Java', 'Angular'],
        code: '',
        role: 'Devops Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Unomi Inc: SaaS for speech automation',
        description: "I developed a full stack SaaS product in collaboration with a Research Center, creating an automation tool for mouth digital character animation",
        tools: ['ExpressJS', 'Angular', 'Node', 'MongoDB', 'AWS'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'Vicomtech: 3D Software developer for R&D projects',
        description: "I developed multiple Virtual Reality and Augmented Reality software products for a 3D Research Center",
        tools: ['C++', 'Unity', 'C#', 'OpenGL', 'Qt', 'Qualcomm SDK', 'OpenCV',],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },