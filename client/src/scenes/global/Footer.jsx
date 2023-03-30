import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width={"80%"}
        margin={"auto"}
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        rowGap={"30px"}
        columnGap={"clamp(20px, 30px, 40px)"}
      >
        <Box width={"clamp(20%, 30%, 40%)"}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            mb="30px"
            color={shades.secondary[500]}
          >
            Sweet Peas Nursery
          </Typography>
          <div>
            Vulgus qualia unitas rantem haberi volent ubi etc. Profecto ii
            obnoxius du scriptum imponere exsurgit mentibus. Neque ipsam co me
            ullos majus totum cujus. Cognita sap formari liquida nunquam hominem
            reducit sit. Cap principia dum eam cui infirmari evidentes. Spem ii
            et nudi alia mo nemo et. Ad is soni ha tius sumi vere vice. Ipsius
            audita de conari ha posset vestra mo.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order </Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width={"clamp(20%, 25%, 30%)"}>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            9000 west Next door Blvd, California 98765
          </Typography>
          <Typography mb="30px">Email: email@gmail.com </Typography>
          <Typography mb="30px">+1(123)-456-7890</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
