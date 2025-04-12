







//  import { useState } from "react";
//  import Accordion from "@mui/material/Accordion";
//  import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import { styled } from "@mui/material/styles";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import PhoneIcon from "@mui/icons-material/Phone";
// import { motion } from "framer-motion"; 
// import Box from "@mui/material/Box";
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



// const ContactContainer = styled(Box)({
//   display: "flex",
//   flexDirection: "column",
//   gap: "16px",
//   marginTop: "12px",
// });

// const ContactItem = styled(motion.a)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: "12px",
//   textDecoration: "none",
//   color: theme.palette.text.secondary,
//   padding: "12px 16px",
//   borderRadius: "10px",
//   background: "rgba(255, 255, 255, 0.7)",
//   border: "1px solid rgba(110, 69, 226, 0.15)",
//   transition: "all 0.3s ease",
//   boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//   "&:hover": {
//     background: "rgba(255, 255, 255, 0.9)",
//     transform: "translateY(-2px)",
//     boxShadow: "0 4px 12px rgba(110, 69, 226, 0.15)",
//     color: theme.palette.text.primary,
//   },
//   [theme.breakpoints.down("sm")]: {
//     padding: "10px 14px",
//   },
// }));

// const ContactIcon = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   width: "40px",
//   height: "40px",
//   borderRadius: "50%",
//   background: "linear-gradient(135deg, #FF6B8B 0%, #6E45E2 100%)",
//   color: "white",
//   flexShrink: 0,
//   [theme.breakpoints.down("sm")]: {
//     width: "36px",
//     height: "36px",
//   },
// }));

// const ContactText = styled(Typography)(({ theme }) => ({
//   fontSize: "1.05rem",
//   fontWeight: "500",
//   [theme.breakpoints.down("sm")]: {
//     fontSize: "0.95rem",
//   },
// }));

// const PhoneNumber = styled("span")({
//   color: "#6E45E2",
//   fontWeight: "600",
// });

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
//             <ContactContainer>
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
            
//             <ContactItem>

//             <ContactIcon>
//                   <PhoneIcon fontSize="small" />
//                 </ContactIcon>
//                 <ContactText>
//                   Call us: <PhoneNumber>{list.phone}</PhoneNumber>
//                 </ContactText>
//               </ContactItem> 
//               </ContactContainer>

//           </GradientAccordionDetails>
//         </GradientAccordion>
//       ))}
//     </MainContainer>
//   );
// }




























































// import { useState } from "react";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   Box,
//   useTheme,
//   useMediaQuery,
//   styled
// } from "@mui/material";
// import { ExpandMore, WhatsApp, Phone } from "@mui/icons-material";
// import { motion } from "framer-motion";

// // Constants
// const BRANCHES_DATA = [
//   {
//     id: 1,
//     name: "Judges Group Of Yoga Society",
//     address: "Lokenathpur, Peyara Bagan, Kolkata - 700153",
//     phone: "+919339058372",
//   },
//   {
//     id: 2,
//     name: "Khardaha Yoga and Physiotherapy Institute",
//     address: "103, Nabun Pally, Khardaha, Kolkata - 700119",
//     phone: "+919339058372",
//   },
//   {
//     id: 3,
//     name: "Maa Sarada Yoga and Physiotherapy Institute",
//     address: "D. Gupta Lane, Kolkata - 700050",
//     phone: "+919339058372",
//   },
//   {
//     id: 4,
//     name: "Unic Physiotherapy and Yoga Centre",
//     address: "Sihar, Bankura, Pin - 722161",
//     phone: "+919339058372",
//   },
//   {
//     id: 5,
//     name: "Umang Yoga Institute",
//     address: "Coopers Camp, 8 no ward, Ranaghat, Nadia, Pin - 741232",
//     phone: "+919339058372",
//   },
// ];

// // Styled Components
// const MainContainer = styled("div")(({ theme }) => ({
//   margin: "3.8rem auto 0",
//   padding: theme.spacing(0, 2.5, 5, 2.5),
//   maxWidth: "800px",
//   background:
//     "radial-gradient(circle at center, rgba(255,245,250,0.8) 0%, rgba(240,245,255,0.8) 100%)",
//   borderRadius: 24,
//   boxShadow: "0 8px 32px rgba(110, 69, 226, 0.1)",
//   [theme.breakpoints.down("md")]: {
//     marginTop: theme.spacing(8),
//     padding: theme.spacing(0, 2, 4, 2),
//   },
//   [theme.breakpoints.down("sm")]: {
//     marginTop: theme.spacing(6),
//     padding: theme.spacing(0, 1.5, 3, 1.5),
//     borderRadius: 16,
//   },
// }));

// const GradientAccordion = styled(Accordion)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
//   borderRadius: "12px !important",
//   overflow: "hidden",
//   boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//   background: "linear-gradient(45deg, #ffffff 0%, #f8f8f8 100%)",
//   "&:before": { display: "none" },
//   "&.Mui-expanded": { margin: theme.spacing(2, 0) },
//   [theme.breakpoints.down("sm")]: { borderRadius: "8px !important" },
// }));

// const GradientAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
//   background: "linear-gradient(45deg, #FF6B8B 0%, #6E45E2 100%)",
//   color: "white",
//   fontWeight: 600,
//   minHeight: 64,
//   "&.Mui-expanded": { minHeight: 64 },
//   "& .MuiAccordionSummary-content": {
//     alignItems: "center",
//     margin: theme.spacing(1.5, 0),
//   },
//   [theme.breakpoints.down("sm")]: {
//     minHeight: 56,
//     "&.Mui-expanded": { minHeight: 56 },
//   },
// }));

// const GradientAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(3),
//   background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
//   borderLeft: "4px solid #6E45E2",
//   display: "flex",
//   flexDirection: "column",
//   gap: theme.spacing(2),
//   [theme.breakpoints.down("sm")]: { padding: theme.spacing(2) },
// }));

// const SectionTitle = styled(Typography)(({ theme }) => ({
//   textAlign: "center",
//   marginBottom: theme.spacing(4),
//   background: "linear-gradient(45deg, #FF6B8B 30%, #6E45E2 90%)",
//   WebkitBackgroundClip: "text",
//   backgroundClip: "text",
//   color: "transparent",
//   fontWeight: 800,
//   fontSize: "2.5rem",
//   [theme.breakpoints.down("md")]: {
//     fontSize: "2.2rem",
//     marginBottom: theme.spacing(3),
//   },
//   [theme.breakpoints.down("sm")]: { 
//     fontSize: "1.8rem", 
//     marginBottom: theme.spacing(2.5) 
//   },
// }));

// const AddressText = styled(Typography)(({ theme }) => ({
//   fontSize: "1.1rem",
//   color: theme.palette.text.secondary,
//   "& strong": { color: "#6E45E2" },
//   [theme.breakpoints.down("sm")]: { fontSize: "1rem" },
// }));

// const BranchName = styled(Typography)(({ theme }) => ({
//   fontSize: "1.2rem",
//   fontWeight: 600,
//   color: "white",
//   [theme.breakpoints.down("sm")]: { 
//     fontSize: "1rem",
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//     maxWidth: "80%",
//   },
// }));

// const ContactContainer = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   gap: theme.spacing(2),
//   marginTop: theme.spacing(1.5),
// }));

// const ContactItem = styled(motion.a)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(1.5),
//   textDecoration: "none",
//   color: theme.palette.text.secondary,
//   padding: theme.spacing(1.5, 2),
//   borderRadius: 10,
//   background: "rgba(255, 255, 255, 0.7)",
//   border: "1px solid rgba(110, 69, 226, 0.15)",
//   transition: "all 0.3s ease",
//   boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//   "&:hover": {
//     background: "rgba(255, 255, 255, 0.9)",
//     transform: "translateY(-2px)",
//     boxShadow: "0 4px 12px rgba(110, 69, 226, 0.15)",
//     color: theme.palette.text.primary,
//   },
//   [theme.breakpoints.down("sm")]: {
//     padding: theme.spacing(1.25, 1.75),
//   },
// }));

// const ContactIcon = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   width: 40,
//   height: 40,
//   borderRadius: "50%",
//   background: "linear-gradient(135deg, #FF6B8B 0%, #6E45E2 100%)",
//   color: "white",
//   flexShrink: 0,
//   [theme.breakpoints.down("sm")]: {
//     width: 36,
//     height: 36,
//   },
// }));

// const ContactText = styled(Typography)(({ theme }) => ({
//   fontSize: "1.05rem",
//   fontWeight: 500,
//   [theme.breakpoints.down("sm")]: {
//     fontSize: "0.95rem",
//   },
// }));

// const PhoneNumber = styled("span")({
//   color: "#6E45E2",
//   fontWeight: 600,
// });

// export default function Branches() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [expanded, setExpanded] = useState(null);

//   const handleChange = (panel) => (_, isExpanded) => {
//     setExpanded(isExpanded ? panel : null);
//   };

//   const getShortenedName = (name) => {
//     if (!isMobile) return name;
//     return name
//       .replace("Institute", "Institute")
//       .replace("Physiotherapy", "Physiotherapy")
//       .replace("Centre", "Centre");
//   };

//   return (
//     <MainContainer>
//       <SectionTitle variant="h2" component="h2" gutterBottom>
//         Our Branches
//       </SectionTitle>

//       {BRANCHES_DATA.map((branch) => (
//         <GradientAccordion
//           key={branch.id}
//           expanded={expanded === `panel${branch.id}`}
//           onChange={handleChange(`panel${branch.id}`)}
//           TransitionProps={{ unmountOnExit: true }}
//         >
//           <GradientAccordionSummary
//             expandIcon={<ExpandMore style={{ color: "white" }} />}
//             aria-controls={`panel${branch.id}-content`}
//             id={`panel${branch.id}-header`}
//           >
//             <BranchName variant="h6" component="h3">
//               {getShortenedName(branch.name)}
//             </BranchName>
//           </GradientAccordionSummary>
          
//           <GradientAccordionDetails>
//             <AddressText>
//               <strong>Address:</strong> {branch.address}
//             </AddressText>
            
//             <ContactContainer>
//               <ContactItem
//                 href={`https://wa.me/${branch.phone}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <ContactIcon>
//                   <WhatsApp fontSize="small" />
//                 </ContactIcon>
//                 <ContactText>
//                   Chat on <PhoneNumber>WhatsApp</PhoneNumber>
//                 </ContactText>
//               </ContactItem>
              
//               <ContactItem
//                 href={`tel:${branch.phone}`}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <ContactIcon>
//                   <Phone fontSize="small" />
//                 </ContactIcon>
//                 <ContactText>
//                   Call us: <PhoneNumber>{branch.phone}</PhoneNumber>
//                 </ContactText>
//               </ContactItem>
//             </ContactContainer>
//           </GradientAccordionDetails>
//         </GradientAccordion>
//       ))}
//     </MainContainer>
//   );
// }



















import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  // useTheme,
  // useMediaQuery,
  styled
} from "@mui/material";
import { ExpandMore, WhatsApp, Phone } from "@mui/icons-material";
import { motion } from "framer-motion";

// Branch data
const BRANCHES_DATA = [
  {
    id: 1,
    name: "Judges Group Of Yoga Society",
    address: "Lokenathpur, Peyara Bagan, Kolkata - 700153",
    phone: "+919339058372",
  },
  {
    id: 2,
    name: "Khardaha Yoga and Physiotherapy Institute",
    address: "103, Nabun Pally, Khardaha, Kolkata - 700119",
    phone: "+919339058372",
  },
  {
    id: 3,
    name: "Maa Sarada Yoga and Physiotherapy Institute",
    address: "D. Gupta Lane, Kolkata - 700050",
    phone: "+919339058372",
  },
  {
    id: 4,
    name: "Unic Physiotherapy and Yoga Centre",
    address: "Sihar, Bankura, Pin - 722161",
    phone: "+919339058372",
  },
  {
    id: 5,
    name: "Umang Yoga Institute",
    address: "Coopers Camp, 8 no ward, Ranaghat, Nadia, Pin - 741232",
    phone: "+919339058372",
  },
];

// Styled Components
const MainContainer = styled("div")(({ theme }) => ({
  margin: "3.8rem auto 0",
  padding: theme.spacing(0, 2.5, 5, 2.5),
  maxWidth: "800px",
  background: "radial-gradient(circle at center, rgba(255,245,250,0.8) 0%, rgba(240,245,255,0.8) 100%)",
  borderRadius: 24,
  boxShadow: "0 8px 32px rgba(110, 69, 226, 0.1)",
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(0, 2, 4, 2),
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(0, 1.5, 3, 1.5),
    borderRadius: 16,
  },
}));

const GradientAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: "12px !important",
  overflow: "hidden",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  background: "linear-gradient(45deg, #ffffff 0%, #f8f8f8 100%)",
  "&:before": { display: "none" },
  "&.Mui-expanded": { margin: theme.spacing(2, 0) },
  [theme.breakpoints.down("sm")]: { borderRadius: "8px !important" },
}));

const GradientAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  background: "linear-gradient(45deg, #FF6B8B 0%, #6E45E2 100%)",
  color: "white",
  fontWeight: 600,
  minHeight: 64,
  "&.Mui-expanded": { minHeight: 64 },
  "& .MuiAccordionSummary-content": {
    alignItems: "center",
    margin: theme.spacing(1.5, 0),
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: 56,
    "&.Mui-expanded": { minHeight: 56 },
  },
}));

const GradientAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
  borderLeft: "4px solid #6E45E2",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: { padding: theme.spacing(2) },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(4),
  background: "linear-gradient(45deg, #FF6B8B 30%, #6E45E2 90%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  fontWeight: 800,
  fontSize: "2.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.2rem",
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: { 
    fontSize: "1.8rem", 
    marginBottom: theme.spacing(2.5) 
  },
}));

const AddressText = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  color: theme.palette.text.secondary,
  "& strong": { color: "#6E45E2" },
  [theme.breakpoints.down("sm")]: { fontSize: "1rem" },
}));

const BranchName = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: 600,
  color: "white",
  [theme.breakpoints.down("sm")]: { 
    fontSize: "1rem",
    whiteSpace: "normal",
    overflow: "visible",
    textOverflow: "clip",
  },
}));

const ContactContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  marginTop: theme.spacing(1.5),
}));

const ContactItem = styled(motion.a)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  textDecoration: "none",
  color: theme.palette.text.secondary,
  padding: theme.spacing(1.5, 2),
  borderRadius: 10,
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
    padding: theme.spacing(1.25, 1.75),
  },
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: "50%",
  background: "linear-gradient(135deg, #FF6B8B 0%, #6E45E2 100%)",
  color: "white",
  flexShrink: 0,
  [theme.breakpoints.down("sm")]: {
    width: 36,
    height: 36,
  },
}));

const ContactText = styled(Typography)(({ theme }) => ({
  fontSize: "1.05rem",
  fontWeight: 500,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
  },
}));

const PhoneNumber = styled("span")({
  color: "#6E45E2",
  fontWeight: 600,
});

// Main Component
export default function Branches() {
  // const theme = useTheme();
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <MainContainer>
      <SectionTitle variant="h2" component="h2" gutterBottom>
        Our Branches
      </SectionTitle>

      {BRANCHES_DATA.map((branch) => (
        <GradientAccordion
          key={branch.id}
          expanded={expanded === `panel${branch.id}`}
          onChange={handleChange(`panel${branch.id}`)}
          TransitionProps={{ unmountOnExit: true }}
        >
          <GradientAccordionSummary
            expandIcon={<ExpandMore style={{ color: "white" }} />}
            aria-controls={`panel${branch.id}-content`}
            id={`panel${branch.id}-header`}
          >
            <BranchName variant="h6" component="h3">
              {branch.name}
            </BranchName>
          </GradientAccordionSummary>
          
          <GradientAccordionDetails>
            <AddressText>
              <strong>Address:</strong> {branch.address}
            </AddressText>
            
            <ContactContainer>
              <ContactItem
                href={`https://wa.me/${branch.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ContactIcon>
                  <WhatsApp fontSize="small" />
                </ContactIcon>
                <ContactText>
                  Chat on <PhoneNumber>WhatsApp</PhoneNumber>
                </ContactText>
              </ContactItem>
              
              <ContactItem
                href={`tel:${branch.phone}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ContactIcon>
                  <Phone fontSize="small" />
                </ContactIcon>
                <ContactText>
                  Call us: <PhoneNumber>{branch.phone}</PhoneNumber>
                </ContactText>
              </ContactItem>
            </ContactContainer>
          </GradientAccordionDetails>
        </GradientAccordion>
      ))}
    </MainContainer>
  );
}




























































