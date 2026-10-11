// // function getStudentData(){
// //     return new Promise((resolve, reject) => {
// //         console.log("Fetching student data...");

// //         resolve({
// //             id: 1,
// //             name: "John Doe",
// //             age: 20,
// //             major: "Computer Science"
// //         });
// //     });
// // }

// // async function displayStudentData() {
// //     console.log("Starting to display student data...");
// //     try {
// //         const studentData = await getStudentData();
// //         console.log("Student Data:", studentData);
// //     } catch (error) {
// //         console.error("Error fetching student data:", error);
// //     }
// // }

// // displayStudentData();



// function getStudentResult(){
//     const success = true;
//     return new Promise((resolve, reject) => {
//         console.log("Requesting Student result");
//         setTimeout(() => {
//             if(success){
//                 resolve({
//                     id: 101,
//                     name: "Rahim",
//                     department: "CSE",
//                     marks: 85
//                 });
//             } else {
//                 reject("Failed to retrive student result.");
//             }
//         }, 3000);
//     })
// }

// getStudentResult().then(
//     (result) => console.log("Student Result:", result)
// ).catch(
//     (error) => console.error("Error fetching student result:", error)
// )

// async function getStudentResultA(){
//     try{
//         const result = await getStudentResult();
//         console.log("Student Result:", result);
//     }
//     catch(error){
//         console.error("Error fetching student result:", error);
//     }
//     finally{
//         console.log("Result Processing completed.");
//     }
// }

// getStudentResultA();

