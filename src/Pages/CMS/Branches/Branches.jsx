





// // export default function Branches() {   




// //   const data = [
// //     {
// //       Name: "Judges Group Of Yoga Society",
// //       Add: "Lokenathpur, Peyara Bagan, Kolkata - 700153",
// //     },
// //     {
// //       Name: "Khardaha Yoga and Physiotherapy Institute",
// //       Add: "103, Nabun Pally, Khardaha, Kolkata - 700119",
// //     },
// //     {
// //       Name: "Maa Sarada Yoga and Physiotherapy Institute",
// //       Add: "D. Gupta Lane, Kolkata - 700050",
// //     },
// //     {
// //       Name: "Unic Physiotherapy and Yoga Centre",
// //       Add: "Sihar, Bankura, Pin - 722161",
// //     },
// //     {
// //       Name: "Umang Yoga Institute",
// //       Add: "Coopers Camp, 8 no ward, Ranaghat, Nadia, Pin - 741232",
// //     },
// //   ];

// //   return (
// //     <div style={{ marginTop: "10rem" }}>
// //       {Array.isArray(data) &&
// //         data?.map((list, index) => (
// //           <div key={index}>
// //             <h1>{list.Name}</h1>
// //             <p>{list.Add}</p>
// //           </div>
// //         ))}
// //     </div>     



   
  


// //   )

// // }





























// // import React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function Branches() {
//   const data = [
//     {
//       Name: "1) Judges Group Of Yoga Society",
//       Add: "Lokenathpur, Peyara Bagan, Kolkata - 700153",
//     },
//     {
//       Name: "2) Khardaha Yoga and Physiotherapy Institute",
//       Add: "103, Nabun Pally, Khardaha, Kolkata - 700119",
//     },
//     {
//       Name: "3) Maa Sarada Yoga and Physiotherapy Institute",
//       Add: "D. Gupta Lane, Kolkata - 700050",
//     },
//     {
//       Name: "4) Unic Physiotherapy and Yoga Centre",
//       Add: "Sihar, Bankura, Pin - 722161",
//     },
//     {
//       Name: "5) Umang Yoga Institute",
//       Add: "Coopers Camp, 8 no ward, Ranaghat, Nadia, Pin - 741232",
//     },
//   ];

//   return (
//     <div style={{ marginTop: "6rem", padding: '0 20px', maxWidth: '800px', margin: '10rem auto 0' }}>
//       <Typography variant="h4" component="h2" gutterBottom style={{ textAlign: 'center', marginBottom: '2rem' }}>
//         Our Branches
//       </Typography>
      
//       {Array.isArray(data) &&
//         data.map((list, index) => (
//           <Accordion key={index} style={{ marginBottom: '10px' }}>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls={`panel${index}-content`}
//               id={`panel${index}-header`}
//             >
//               <Typography variant="h6" component="h3">
//                 <h3>{list.Name}</h3>
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>
//                 <strong>Address:</strong> {list.Add}
//               </Typography>
//             </AccordionDetails>
//           </Accordion>
//         ))}
//     </div>
//   );
// }           



































// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { styled } from '@mui/material/styles';

// // Styled components with gradient theme
// const GradientAccordion = styled(Accordion)(({ theme }) => ({
//   marginBottom: '16px',
//   borderRadius: '12px',
//   overflow: 'hidden',
//   boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//   background: 'linear-gradient(45deg, #ffffff 0%, #f8f8f8 100%)',
//   '&:before': {
//     display: 'none',
//   },
//   '&.Mui-expanded': {
//     margin: '16px 0',
//   },
// }));

// const GradientAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
//   background: 'linear-gradient(45deg, #FF6B8B 0%, #6E45E2 100%)',
//   color: 'white',
//   fontWeight: '600',
//   minHeight: '64px',
//   '&.Mui-expanded': {
//     minHeight: '64px',
//   },
//   '& .MuiAccordionSummary-content': {
//     alignItems: 'center',
//     margin: '12px 0',
//   },
// }));

// const GradientAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
//   padding: '24px',
//   background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
//   borderLeft: '4px solid #6E45E2',
// }));

// const SectionTitle = styled(Typography)(({ theme }) => ({
//   textAlign: 'center',
//   marginBottom: '3rem',
//   background: 'linear-gradient(45deg, #FF6B8B 30%, #6E45E2 90%)',
//   WebkitBackgroundClip: 'text',
//   backgroundClip: 'text',
//   color: 'transparent',
//   fontWeight: '800',
//   fontSize: '2.5rem',
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '2rem',
//   },
// }));

// const AddressText = styled(Typography)(({ theme }) => ({
//   fontSize: '1.1rem',
//   color: '#333',
//   '& strong': {
//     color: '#6E45E2',
//   },
// }));

// const BranchName = styled(Typography)(({ theme }) => ({
//   fontSize: '1.2rem',
//   fontWeight: '600',
//   color: 'white',
// }));

// export default function Branches() {
//   const data = [
//     {
//       Name: "1) Judges Group Of Yoga Society",
//       Add: "Lokenathpur, Peyara Bagan, Kolkata - 700153",
//     },
//     {
//       Name: "2) Khardaha Yoga and Physiotherapy Institute",
//       Add: "103, Nabun Pally, Khardaha, Kolkata - 700119",
//     },
//     {
//       Name: "3) Maa Sarada Yoga and Physiotherapy Institute",
//       Add: "D. Gupta Lane, Kolkata - 700050",
//     },
//     {
//       Name: "4) Unic Physiotherapy and Yoga Centre",
//       Add: "Sihar, Bankura, Pin - 722161",
//     },
//     {
//       Name: "5) Umang Yoga Institute",
//       Add: "Coopers Camp, 8 no ward, Ranaghat, Nadia, Pin - 741232",
//     },
//   ];

//   return (
//     <div style={{ 
//       marginTop: "6rem", 
//       padding: '0 20px', 
//       maxWidth: '800px', 
//       margin: '10rem auto 0',
//       background: 'radial-gradient(circle at center, rgba(255,245,250,0.8) 0%, rgba(240,245,255,0.8) 100%)',
//       borderRadius: '24px',
//       padding: '40px 20px',
//       boxShadow: '0 8px 32px rgba(110, 69, 226, 0.1)'
//     }}>
//       <SectionTitle variant="h2" component="h2" gutterBottom>
//         Our Branches
//       </SectionTitle>
      
//       {Array.isArray(data) &&
//         data.map((list, index) => (
//           <GradientAccordion key={index}>
//             <GradientAccordionSummary
//               expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
//               aria-controls={`panel${index}-content`}
//               id={`panel${index}-header`}
//             >
//               <BranchName variant="h6" component="h3">
//                 {list.Name}
//               </BranchName>
//             </GradientAccordionSummary>
//             <GradientAccordionDetails>
//               <AddressText>
//                 <strong>Address:</strong> {list.Add}
//               </AddressText>
//             </GradientAccordionDetails>
//           </GradientAccordion>
//         ))}
//     </div>
//   );
// }   





























import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

// Styled components with gradient theme
const GradientAccordion = styled(Accordion)({
  marginBottom: '16px',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  background: 'linear-gradient(45deg, #ffffff 0%, #f8f8f8 100%)',
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: '16px 0',
  },
});

const GradientAccordionSummary = styled(AccordionSummary)({
  background: 'linear-gradient(45deg, #FF6B8B 0%, #6E45E2 100%)',
  color: 'white',
  fontWeight: '600',
  minHeight: '64px',
  '&.Mui-expanded': {
    minHeight: '64px',
  },
  '& .MuiAccordionSummary-content': {
    alignItems: 'center',
    margin: '12px 0',
  },
});

const GradientAccordionDetails = styled(AccordionDetails)({
  padding: '24px',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
  borderLeft: '4px solid #6E45E2',
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '3rem',
  background: 'linear-gradient(45deg, #FF6B8B 30%, #6E45E2 90%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  fontWeight: '800',
  fontSize: '2.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const AddressText = styled(Typography)({
  fontSize: '1.1rem',
  color: '#333',
  '& strong': {
    color: '#6E45E2',
  },
});

const BranchName = styled(Typography)({
  fontSize: '1.2rem',
  fontWeight: '600',
  color: 'white',
});

export default function Branches() {
  const data = [
    {
      Name: "1) Judges Group Of Yoga Society",
      Add: "Lokenathpur, Peyara Bagan, Kolkata - 700153",
    },
    {
      Name: "2) Khardaha Yoga and Physiotherapy Institute",
      Add: "103, Nabun Pally, Khardaha, Kolkata - 700119",
    },
    {
      Name: "3) Maa Sarada Yoga and Physiotherapy Institute",
      Add: "D. Gupta Lane, Kolkata - 700050",
    },
    {
      Name: "4) Unic Physiotherapy and Yoga Centre",
      Add: "Sihar, Bankura, Pin - 722161",
    },
    {
      Name: "5) Umang Yoga Institute",
      Add: "Coopers Camp, 8 no ward, Ranaghat, Nadia, Pin - 741232",
    },
  ];

  return (
    <div style={{ 
      marginTop: "6rem", 
      padding: '0 20px 40px 20px', 
      maxWidth: '800px', 
      margin: '10rem auto 0',
      background: 'radial-gradient(circle at center, rgba(255,245,250,0.8) 0%, rgba(240,245,255,0.8) 100%)',
      borderRadius: '24px',
      // padding: '40px 20px', 
      boxShadow: '0 8px 32px rgba(110, 69, 226, 0.1)'
    }}>
      <SectionTitle variant="h2" component="h2" gutterBottom>
        Our Branches
      </SectionTitle>
      
      {Array.isArray(data) &&
        data.map((list, index) => (
          <GradientAccordion key={index}>
            <GradientAccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <BranchName variant="h6" component="h3">
                {list.Name}
              </BranchName>
            </GradientAccordionSummary>
            <GradientAccordionDetails>
              <AddressText>
                <strong>Address:</strong> {list.Add}
              </AddressText>
            </GradientAccordionDetails>
          </GradientAccordion>
        ))}
    </div>
  );
}