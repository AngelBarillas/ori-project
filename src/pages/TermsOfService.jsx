import React from "react";
import { Container, Typography, Box } from "@mui/material";

const TermsOfService = () => {
  return (
    <Container maxWidth="md">
      <Box my={5}>
        <Typography variant="h4" gutterBottom>
          Terms of Service
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to ALOA BEAUTY! By using our website and services, you agree
          to the following terms and conditions:
        </Typography>

        <Typography variant="h5" gutterBottom>
          1. Use of Our Services
        </Typography>
        <Typography variant="body1" paragraph>
          You agree to use our services for lawful purposes only. You must not
          engage in any activity that may harm or interfere with the operation
          of our website or services.
        </Typography>

        <Typography variant="h5" gutterBottom>
          2. Booking and Payment
        </Typography>
        <Typography variant="body1" paragraph>
          When booking an appointment or purchasing services, you agree to
          provide accurate information and make timely payments. We reserve the
          right to cancel or reschedule appointments if necessary.
        </Typography>

        <Typography variant="h5" gutterBottom>
          3. Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          Our liability is limited to the maximum extent allowed by law. We are
          not responsible for any indirect, incidental, or consequential damages
          arising from your use of our website or services.
        </Typography>

        <Typography variant="h5" gutterBottom>
          4. Privacy and Data Collection
        </Typography>
        <Typography variant="body1" paragraph>
          By using our services, you agree to our Privacy Policy, which outlines
          how we collect, use, and protect your personal data.
        </Typography>

        <Typography variant="h5" gutterBottom>
          5. Changes to the Terms
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to modify or update these Terms of Service at any
          time. Any changes will be reflected on this page with the date of the
          update.
        </Typography>

        <Typography variant="h5" gutterBottom>
          6. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions regarding these Terms of Service, please
          contact us at aloabeauty23@gmail.com .
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfService;
