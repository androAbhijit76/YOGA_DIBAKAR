// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { styled } from '@mui/material/styles';

// // Styled components with gradient theme
// const GradientAccordion = styled(Accordion)({
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
// });

// const GradientAccordionSummary = styled(AccordionSummary)({
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
// });

// const GradientAccordionDetails = styled(AccordionDetails)({
//   padding: '24px',
//   background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
//   borderLeft: '4px solid #6E45E2',
// });

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

// const AddressText = styled(Typography)({
//   fontSize: '1.1rem',
//   color: '#333',
//   '& strong': {
//     color: '#6E45E2',
//   },
// });

// const BranchName = styled(Typography)({
//   fontSize: '1.2rem',
//   fontWeight: '600',
//   color: 'white',
// });

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
//       padding: '0 20px 40px 20px',
//       maxWidth: '800px',
//       margin: '10rem auto 0',
//       background: 'radial-gradient(circle at center, rgba(255,245,250,0.8) 0%, rgba(240,245,255,0.8) 100%)',
//       borderRadius: '24px',
//       // padding: '40px 20px',
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

// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { styled } from '@mui/material/styles';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

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
//   [theme.breakpoints.down('sm')]: {
//     borderRadius: '8px',
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
//   [theme.breakpoints.down('sm')]: {
//     minHeight: '56px',
//     '&.Mui-expanded': {
//       minHeight: '56px',
//     },
//   },
// }));

// const GradientAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
//   padding: '24px',
//   background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
//   borderLeft: '4px solid #6E45E2',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '16px',
//   [theme.breakpoints.down('sm')]: {
//     padding: '16px',
//   },
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
//   [theme.breakpoints.down('md')]: {
//     fontSize: '2.2rem',
//     marginBottom: '2.5rem',
//   },
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '1.8rem',
//     marginBottom: '2rem',
//   },
// }));

// const AddressText = styled(Typography)(({ theme }) => ({
//   fontSize: '1.1rem',
//   color: '#333',
//   '& strong': {
//     color: '#6E45E2',
//   },
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '1rem',
//   },
// }));

// const BranchName = styled(Typography)(({ theme }) => ({
//   fontSize: '1.2rem',
//   fontWeight: '600',
//   color: 'white',
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '1rem',
//   },
// }));

// const WhatsAppContainer = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '8px',
//   marginTop: '8px',
//   '&:hover': {
//     '& svg': {
//       transform: 'scale(1.1)',
//     },
//     '& span': {
//       color: '#6E45E2',
//     }
//   }
// });

// const WhatsAppLink = styled('a')({
//   display: 'flex',
//   alignItems: 'center',
//   textDecoration: 'none',
//   color: 'inherit',
//   transition: 'all 0.3s ease',
// });

// const StyledWhatsAppIcon = styled(WhatsAppIcon)(({ theme }) => ({
//   fontSize: '2rem',
//   color: '#25D366',
//   transition: 'all 0.3s ease',
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '1.8rem',
//   },
// }));

// const WhatsAppText = styled('span')(({ theme }) => ({
//   marginLeft: '8px',
//   fontSize: '1rem',
//   color: '#25D366',
//   fontWeight: '500',
//   transition: 'all 0.3s ease',
//   textDecoration: 'none',
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '0.9rem',
//   },
// }));

// const MainContainer = styled('div')(({ theme }) => ({
//   marginTop: '6rem',
//   padding: '0 20px 40px 20px',
//   maxWidth: '800px',
//   margin: '10rem auto 0',
//   background: 'radial-gradient(circle at center, rgba(255,245,250,0.8) 0%, rgba(240,245,255,0.8) 100%)',
//   borderRadius: '24px',
//   boxShadow: '0 8px 32px rgba(110, 69, 226, 0.1)',
//   [theme.breakpoints.down('md')]: {
//     marginTop: '8rem',
//     padding: '0 16px 32px 16px',
//   },
//   [theme.breakpoints.down('sm')]: {
//     marginTop: '6rem',
//     padding: '0 12px 24px 12px',
//     borderRadius: '16px',
//   },
// }));

// export default function Branches() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const data = [
//     {
//       Name: "1) Judges Group Of Yoga Society",
//       Add: "Lokenathpur, Peyara Bagan, Kolkata - 700153",
//       phone: "+919831234567" // replace with actual phone number
//     },
//     {
//       Name: "2) Khardaha Yoga and Physiotherapy Institute",
//       Add: "103, Nabun Pally, Khardaha, Kolkata - 700119",
//       phone: "+919831234567" // replace with actual phone number
//     },
//     {
//       Name: "3) Maa Sarada Yoga and Physiotherapy Institute",
//       Add: "D. Gupta Lane, Kolkata - 700050",
//       phone: "+919831234567" // replace with actual phone number
//     },
//     {
//       Name: "4) Unic Physiotherapy and Yoga Centre",
//       Add: "Sihar, Bankura, Pin - 722161",
//       phone: "+919831234567" // replace with actual phone number
//     },
//     {
//       Name: "5) Umang Yoga Institute",
//       Add: "Coopers Camp, 8 no ward, Ranaghat, Nadia, Pin - 741232",
//       phone: "+919831234567" // replace with actual phone number
//     },
//   ];

//   return (
//     <MainContainer>
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
//                 {isMobile ? list.Name.replace("Institute", "Inst.").replace("Physiotherapy", "Physio.") : list.Name}
//               </BranchName>
//             </GradientAccordionSummary>
//             <GradientAccordionDetails>
//               <AddressText>
//                 <strong>Address:</strong> {list.Add}
//               </AddressText>
//               <WhatsAppContainer>
//                 <WhatsAppLink
//                   href={`https://wa.me/${list.phone}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <StyledWhatsAppIcon />
//                   <WhatsAppText>Chat with us on WhatsApp</WhatsAppText>
//                 </WhatsAppLink>
//               </WhatsAppContainer>
//             </GradientAccordionDetails>
//           </GradientAccordion>
//         ))}
//     </MainContainer>
//   );
// }







// import { useState } from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import { styled } from "@mui/material/styles";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";

// // Styled components
// const MainContainer = styled("div")(({ theme }) => ({
//   marginTop: "6rem",
//   padding: "0 20px 40px 20px",
//   maxWidth: "800px",
//   margin: "3.8rem auto 0",
//   background:
//     "radial-gradient(circle at center, rgba(255,245,250,0.8) 0%, rgba(240,245,255,0.8) 100%)",
//   borderRadius: "24px",
//   boxShadow: "0 8px 32px rgba(110, 69, 226, 0.1)",
//   [theme.breakpoints.down("md")]: {
//     marginTop: "8rem",
//     padding: "0 16px 32px 16px",
//   },
//   [theme.breakpoints.down("sm")]: {
//     marginTop: "6rem",
//     padding: "0 12px 24px 12px",
//     borderRadius: "16px",
//   },
// }));

// const GradientAccordion = styled(Accordion)(({ theme }) => ({
//   marginBottom: "16px",
//   borderRadius: "12px !important",
//   overflow: "hidden",
//   boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//   background: "linear-gradient(45deg, #ffffff 0%, #f8f8f8 100%)",
//   "&:before": { display: "none" },
//   "&.Mui-expanded": { margin: "16px 0" },
//   [theme.breakpoints.down("sm")]: { borderRadius: "8px !important" },
// }));

// const GradientAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
//   background: "linear-gradient(45deg, #FF6B8B 0%, #6E45E2 100%)",
//   color: "white",
//   fontWeight: "600",
//   minHeight: "64px",
//   "&.Mui-expanded": { minHeight: "64px" },
//   "& .MuiAccordionSummary-content": {
//     alignItems: "center",
//     margin: "12px 0",
//   },
//   [theme.breakpoints.down("sm")]: {
//     minHeight: "56px",
//     "&.Mui-expanded": { minHeight: "56px" },
//   },
// }));

// const GradientAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
//   padding: "24px",
//   background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
//   borderLeft: "4px solid #6E45E2",
//   display: "flex",
//   flexDirection: "column",
//   gap: "16px",
//   [theme.breakpoints.down("sm")]: { padding: "16px" },
// }));

// const SectionTitle = styled(Typography)(({ theme }) => ({
//   textAlign: "center",
//   marginBottom: "3rem",
//   background: "linear-gradient(45deg, #FF6B8B 30%, #6E45E2 90%)",
//   WebkitBackgroundClip: "text",
//   backgroundClip: "text",
//   color: "transparent",
//   fontWeight: "800",
//   fontSize: "2.5rem",
//   [theme.breakpoints.down("md")]: {
//     fontSize: "2.2rem",
//     marginBottom: "2.5rem",
//   },
//   [theme.breakpoints.down("sm")]: { fontSize: "1.8rem", marginBottom: "2rem" },
// }));

// const AddressText = styled(Typography)(({ theme }) => ({
//   fontSize: "1.1rem",
//   color: "#333",
//   "& strong": { color: "#6E45E2" },
//   [theme.breakpoints.down("sm")]: { fontSize: "1rem" },
// }));

// const BranchName = styled(Typography)(({ theme }) => ({
//   fontSize: "1.2rem",
//   fontWeight: "600",
//   color: "white",
//   [theme.breakpoints.down("sm")]: { fontSize: "1rem" },
// }));

// const WhatsAppContainer = styled("div")({
//   display: "flex",
//   alignItems: "center",
//   gap: "8px",
//   marginTop: "8px",
//   "&:hover": {
//     "& svg": { transform: "scale(1.1)" },
//     "& span": { color: "#6E45E2" },
//   },
// });

// const WhatsAppLink = styled("a")({
//   display: "flex",
//   alignItems: "center",
//   textDecoration: "none",
//   color: "inherit",
//   transition: "all 0.3s ease",
// });

// const StyledWhatsAppIcon = styled(WhatsAppIcon)(({ theme }) => ({
//   fontSize: "2rem",
//   color: "#25D366", // Official WhatsApp green
//   transition: "all 0.3s ease",
//   [theme.breakpoints.down("sm")]: { fontSize: "1.8rem" },
// }));

// const WhatsAppText = styled("span")(({ theme }) => ({
//   marginLeft: "8px",
//   fontSize: "1rem",
//   color: "#25D366",
//   fontWeight: "500",
//   transition: "all 0.3s ease",
//   [theme.breakpoints.down("sm")]: { fontSize: "0.9rem" },
// }));

// export default function Branches() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [expanded, setExpanded] = useState(null);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : null);
//   };

//   const data = [
//     {
//       Name: "1) Judges Group Of Yoga Society",
//       Add: "Lokenathpur, Peyara Bagan, Kolkata - 700153",
//       phone: "+916290409618", // Replace with actual number
//     },
//     {
//       Name: "2) Khardaha Yoga and Physiotherapy Institute",
//       Add: "103, Nabun Pally, Khardaha, Kolkata - 700119",
//       phone: "+916290409618",
//     },
//     {
//       Name: "3) Maa Sarada Yoga and Physiotherapy Institute",
//       Add: "D. Gupta Lane, Kolkata - 700050",
//       phone: "+916290409618",
//     },
//     {
//       Name: "4) Unic Physiotherapy and Yoga Centre",
//       Add: "Sihar, Bankura, Pin - 722161",
//       phone: "+916290409618",
//     },
//     {
//       Name: "5) Umang Yoga Institute",
//       Add: "Coopers Camp, 8 no ward, Ranaghat, Nadia, Pin - 741232",
//       phone: "+916290409618",
//     },
//   ];

//   return (
//     <MainContainer>
//       <SectionTitle variant="h2" component="h2" gutterBottom>
//         Our Branches
//       </SectionTitle>

//       {data.map((list, index) => (
//         <GradientAccordion
//           key={index}
//           expanded={expanded === `panel${index}`}
//           onChange={handleChange(`panel${index}`)}
//         >
//           <GradientAccordionSummary
//             expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
//             aria-controls={`panel${index}-content`}
//             id={`panel${index}-header`}
//           >
//             <BranchName variant="h6" component="h3">
//               {isMobile
//                 ? list.Name.replace("Institute", "Inst.").replace(
//                     "Physiotherapy",
//                     "Physio."
//                   )
//                 : list.Name}
//             </BranchName>
//           </GradientAccordionSummary>
//           <GradientAccordionDetails>
//             <AddressText>
//               <strong>Address:</strong> {list.Add}
//             </AddressText>
//             <WhatsAppContainer>
//               <WhatsAppLink
//                 href={`https://wa.me/${list.phone}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <StyledWhatsAppIcon />
//                 <WhatsAppText>Chat with us on WhatsApp</WhatsAppText>
//               </WhatsAppLink>
//             </WhatsAppContainer>
//           </GradientAccordionDetails>
//         </GradientAccordion>
//       ))}
//     </MainContainer>
//   );
// }








































import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Styled components
const MainContainer = styled(motion.div)(({ theme }) => ({
  marginTop: "6rem",
  padding: "0 20px 60px",
  maxWidth: "900px",
  margin: "3.8rem auto 0",
  background: `
    radial-gradient(
      circle at 10% 20%,
      rgba(255, 245, 250, 0.95) 0%,
      rgba(240, 245, 255, 0.95) 100%
    ),
    url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')
  `,
  borderRadius: "28px",
  boxShadow: `
    0 8px 32px rgba(110, 69, 226, 0.15),
    inset 0 0 20px rgba(255, 255, 255, 0.5)
  `,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(8px)",
  [theme.breakpoints.down("md")]: {
    marginTop: "7rem",
    padding: "0 16px 48px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "5.5rem",
    padding: "0 12px 36px",
    borderRadius: "20px",
  },
}));

const GradientAccordion = styled(motion(Accordion))(({ theme }) => ({
  marginBottom: "18px",
  borderRadius: "14px !important",
  overflow: "hidden",
  boxShadow: `
    0 6px 25px rgba(110, 69, 226, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3)
  `,
  background: "rgba(255, 255, 255, 0.85)",
  border: "1px solid rgba(255, 255, 255, 0.4)",
  backdropFilter: "blur(8px)",
  transition: "all 0.3s ease-out",
  "&:before": { display: "none" },
  "&.Mui-expanded": { 
    margin: "18px 0",
    transform: "scale(1.01)",
    boxShadow: "0 8px 30px rgba(110, 69, 226, 0.2)",
  },
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 10px 30px rgba(110, 69, 226, 0.25)",
  },
  [theme.breakpoints.down("sm")]: { 
    borderRadius: "12px !important",
    marginBottom: "14px",
  },
}));

const GradientAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  background: `
    linear-gradient(
      135deg, 
      rgba(255, 107, 139, 0.9) 0%, 
      rgba(110, 69, 226, 0.9) 100%
    ),
    url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA3KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')
  `,
  color: "white",
  fontWeight: "600",
  minHeight: "72px",
  padding: "0 24px",
  "&.Mui-expanded": { minHeight: "72px" },
  "& .MuiAccordionSummary-content": {
    alignItems: "center",
    margin: "16px 0",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  "&.Mui-expanded .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(180deg)",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "64px",
    padding: "0 16px",
    "&.Mui-expanded": { minHeight: "64px" },
  },
}));

const GradientAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: "28px",
  background: "rgba(245, 247, 250, 0.7)",
  borderLeft: "5px solid #6E45E2",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  backdropFilter: "blur(5px)",
  [theme.breakpoints.down("sm")]: { 
    padding: "20px",
    gap: "16px",
  },
}));

const SectionTitle = styled(motion(Typography))(({ theme }) => ({
  textAlign: "center",
  margin: "3rem 0 4rem",
  background: "linear-gradient(45deg, #FF6B8B 30%, #6E45E2 90%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  fontWeight: "800",
  fontSize: "2.8rem",
  letterSpacing: "-0.5px",
  textShadow: "0 2px 10px rgba(110, 69, 226, 0.2)",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: "-15px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80px",
    height: "4px",
    background: "linear-gradient(90deg, #FF6B8B, #6E45E2)",
    borderRadius: "2px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2.4rem",
    margin: "2.5rem 0 3.5rem",
  },
  [theme.breakpoints.down("sm")]: { 
    fontSize: "2rem",
    margin: "2rem 0 3rem",
    "&:after": {
      width: "60px",
      bottom: "-12px",
    }
  },
}));

const AddressText = styled(Typography)(({ theme }) => ({
  fontSize: "1.15rem",
  color: "#444",
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  lineHeight: "1.6",
  "& strong": { 
    color: "#6E45E2",
    fontWeight: "600",
    minWidth: "80px",
    display: "inline-block",
  },
  [theme.breakpoints.down("sm")]: { 
    fontSize: "1.05rem",
    flexDirection: "column",
    gap: "4px",
    "& strong": {
      minWidth: "auto",
    }
  },
}));

const BranchName = styled(Typography)(({ theme }) => ({
  fontSize: "1.3rem",
  fontWeight: "700",
  color: "white",
  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
  letterSpacing: "-0.3px",
  [theme.breakpoints.down("md")]: { fontSize: "1.2rem" },
  [theme.breakpoints.down("sm")]: { 
    fontSize: "1.1rem",
    letterSpacing: "-0.2px",
  },
}));

const ContactContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginTop: "12px",
});

const ContactItem = styled(motion.a)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  textDecoration: "none",
  color: theme.palette.text.secondary,
  padding: "12px 16px",
  borderRadius: "10px",
  background: "rgba(255, 255, 255, 0.7)",
  border: "1px solid rgba(110, 69, 226, 0.15)",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.9)",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(110, 69, 226, 0.15)",
    color: theme.palette.text.primary,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 14px",
  },
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #FF6B8B 0%, #6E45E2 100%)",
  color: "white",
  flexShrink: 0,
  [theme.breakpoints.down("sm")]: {
    width: "36px",
    height: "36px",
  },
}));

const ContactText = styled(Typography)(({ theme }) => ({
  fontSize: "1.05rem",
  fontWeight: "500",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
  },
}));

const PhoneNumber = styled("span")({
  color: "#6E45E2",
  fontWeight: "600",
});

export default function Branches() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const data = [
    {
      Name: "1) Judges Group Of Yoga Society",
      Add: "Lokenathpur, Peyara Bagan, Kolkata - 700153",
      phone: "+919339058372",
      // locationLink: "https://maps.google.com/?q=Lokenathpur,Peyara+Bagan,Kolkata"
    },
    {
      Name: "2) Khardaha Yoga and Physiotherapy Institute",
      Add: "103, Nabun Pally, Khardaha, Kolkata - 700119",
      phone: "+919339058372",
      // locationLink: "https://maps.google.com/?q=103,Nabun+Pally,Khardaha,Kolkata"
    },
    {
      Name: "3) Maa Sarada Yoga and Physiotherapy Institute",
      Add: "D. Gupta Lane, Kolkata - 700050",
      phone: "+919339058372",
      // locationLink: "https://maps.google.com/?q=D.+Gupta+Lane,Kolkata"
    },
    {
      Name: "4) Unic Physiotherapy and Yoga Centre",
      Add: "Sihar, Bankura, Pin - 722161",
      phone: "+919339058372",
      // locationLink: "https://maps.google.com/?q=Sihar,Bankura"
    },
    {
      Name: "5) Umang Yoga Institute",
      Add: "Coopers Camp, 8 no ward, Ranaghat, Nadia, Pin - 741232",
      phone: "+919339058372",
      // locationLink: "https://maps.google.com/?q=Coopers+Camp,Ranaghat,Nadia"
    },
  ];

  return (
    <MainContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SectionTitle 
        variant="h2" 
        component="h2" 
        gutterBottom
        variants={itemVariants}
      >
        Our Branches
      </SectionTitle>

      {data.map((list, index) => (
        <GradientAccordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          variants={itemVariants}
        >
          <GradientAccordionSummary
            expandIcon={
              <ExpandMoreIcon 
                style={{ 
                  color: "white",
                  fontSize: "1.8rem"
                }} 
              />
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <BranchName variant="h6" component="h3">
              {isMobile
                ? list.Name
                    .replace("Institute", "Inst.")
                    .replace("Physiotherapy", "Physio.")
                    .replace("Centre", "Ctr.")
                : list.Name}
            </BranchName>
          </GradientAccordionSummary>
          <GradientAccordionDetails>
            <AddressText>
              <LocationOnIcon 
                color="primary" 
                fontSize="small" 
                sx={{ 
                  marginRight: "8px",
                  color: "#6E45E2"
                }} 
              />
              <Box>
                <strong>Address:</strong> {list.Add}
              </Box>
            </AddressText>
            
            <ContactContainer>
              <ContactItem
                href={`https://wa.me/${list.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ContactIcon>
                  <WhatsAppIcon fontSize="small" />
                </ContactIcon>
                <ContactText>
                  Chat on <PhoneNumber>WhatsApp</PhoneNumber>
                </ContactText>
              </ContactItem>
              
              <ContactItem
                href={`tel:${list.phone}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ContactIcon>
                  <PhoneIcon fontSize="small" />
                </ContactIcon>
                <ContactText>
                  Call us: <PhoneNumber>{list.phone}</PhoneNumber>
                </ContactText>
              </ContactItem>
              
              {/* <ContactItem
                href={list.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ContactIcon>
                  <LocationOnIcon fontSize="small" />
                </ContactIcon>
                <ContactText>
                  View on <PhoneNumber>Google Maps</PhoneNumber>
                </ContactText>
              </ContactItem> */}
            </ContactContainer>
          </GradientAccordionDetails>
        </GradientAccordion>
      ))}
    </MainContainer>
  );
}