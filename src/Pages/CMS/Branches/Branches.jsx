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







import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Styled components
const MainContainer = styled("div")(({ theme }) => ({
  marginTop: "6rem",
  padding: "0 20px 40px 20px",
  maxWidth: "800px",
  margin: "3.8rem auto 0",
  background:
    "radial-gradient(circle at center, rgba(255,245,250,0.8) 0%, rgba(240,245,255,0.8) 100%)",
  borderRadius: "24px",
  boxShadow: "0 8px 32px rgba(110, 69, 226, 0.1)",
  [theme.breakpoints.down("md")]: {
    marginTop: "8rem",
    padding: "0 16px 32px 16px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "6rem",
    padding: "0 12px 24px 12px",
    borderRadius: "16px",
  },
}));

const GradientAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: "16px",
  borderRadius: "12px !important",
  overflow: "hidden",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  background: "linear-gradient(45deg, #ffffff 0%, #f8f8f8 100%)",
  "&:before": { display: "none" },
  "&.Mui-expanded": { margin: "16px 0" },
  [theme.breakpoints.down("sm")]: { borderRadius: "8px !important" },
}));

const GradientAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  background: "linear-gradient(45deg, #FF6B8B 0%, #6E45E2 100%)",
  color: "white",
  fontWeight: "600",
  minHeight: "64px",
  "&.Mui-expanded": { minHeight: "64px" },
  "& .MuiAccordionSummary-content": {
    alignItems: "center",
    margin: "12px 0",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "56px",
    "&.Mui-expanded": { minHeight: "56px" },
  },
}));

const GradientAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: "24px",
  background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
  borderLeft: "4px solid #6E45E2",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  [theme.breakpoints.down("sm")]: { padding: "16px" },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "3rem",
  background: "linear-gradient(45deg, #FF6B8B 30%, #6E45E2 90%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  fontWeight: "800",
  fontSize: "2.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.2rem",
    marginBottom: "2.5rem",
  },
  [theme.breakpoints.down("sm")]: { fontSize: "1.8rem", marginBottom: "2rem" },
}));

const AddressText = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  color: "#333",
  "& strong": { color: "#6E45E2" },
  [theme.breakpoints.down("sm")]: { fontSize: "1rem" },
}));

const BranchName = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "600",
  color: "white",
  [theme.breakpoints.down("sm")]: { fontSize: "1rem" },
}));

const WhatsAppContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginTop: "8px",
  "&:hover": {
    "& svg": { transform: "scale(1.1)" },
    "& span": { color: "#6E45E2" },
  },
});

const WhatsAppLink = styled("a")({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
  transition: "all 0.3s ease",
});

const StyledWhatsAppIcon = styled(WhatsAppIcon)(({ theme }) => ({
  fontSize: "2rem",
  color: "#25D366", // Official WhatsApp green
  transition: "all 0.3s ease",
  [theme.breakpoints.down("sm")]: { fontSize: "1.8rem" },
}));

const WhatsAppText = styled("span")(({ theme }) => ({
  marginLeft: "8px",
  fontSize: "1rem",
  color: "#25D366",
  fontWeight: "500",
  transition: "all 0.3s ease",
  [theme.breakpoints.down("sm")]: { fontSize: "0.9rem" },
}));

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
      phone: "+916290409618", // Replace with actual number
    },
    {
      Name: "2) Khardaha Yoga and Physiotherapy Institute",
      Add: "103, Nabun Pally, Khardaha, Kolkata - 700119",
      phone: "+916290409618",
    },
    {
      Name: "3) Maa Sarada Yoga and Physiotherapy Institute",
      Add: "D. Gupta Lane, Kolkata - 700050",
      phone: "+916290409618",
    },
    {
      Name: "4) Unic Physiotherapy and Yoga Centre",
      Add: "Sihar, Bankura, Pin - 722161",
      phone: "+916290409618",
    },
    {
      Name: "5) Umang Yoga Institute",
      Add: "Coopers Camp, 8 no ward, Ranaghat, Nadia, Pin - 741232",
      phone: "+916290409618",
    },
  ];

  return (
    <MainContainer>
      <SectionTitle variant="h2" component="h2" gutterBottom>
        Our Branches
      </SectionTitle>

      {data.map((list, index) => (
        <GradientAccordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <GradientAccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <BranchName variant="h6" component="h3">
              {isMobile
                ? list.Name.replace("Institute", "Inst.").replace(
                    "Physiotherapy",
                    "Physio."
                  )
                : list.Name}
            </BranchName>
          </GradientAccordionSummary>
          <GradientAccordionDetails>
            <AddressText>
              <strong>Address:</strong> {list.Add}
            </AddressText>
            <WhatsAppContainer>
              <WhatsAppLink
                href={`https://wa.me/${list.phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledWhatsAppIcon />
                <WhatsAppText>Chat with us on WhatsApp</WhatsAppText>
              </WhatsAppLink>
            </WhatsAppContainer>
          </GradientAccordionDetails>
        </GradientAccordion>
      ))}
    </MainContainer>
  );
}
