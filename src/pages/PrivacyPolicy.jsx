import React from "react";
import { Container, Typography, Box } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md">
      <Box my={5}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          At ALOA BEAUTY, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and safeguard your
          personal information when you visit our website and use our services.
        </Typography>

        <Typography variant="h5" gutterBottom>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We collect personal information such as your name, email address, and
          phone number when you contact us, subscribe to our newsletter, or make
          an appointment through our website.
        </Typography>

        <Typography variant="h5" gutterBottom>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use the information we collect to provide and improve our services,
          respond to inquiries, process bookings, and send promotional offers if
          you've opted in to receive them.
        </Typography>

        <Typography variant="h5" gutterBottom>
          3. Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          We take reasonable measures to protect your personal information from
          unauthorized access or disclosure. However, please note that no method
          of transmission over the internet or electronic storage is 100%
          secure.
        </Typography>

        <Typography variant="h5" gutterBottom>
          4. Cookies
        </Typography>
        <Typography variant="body1" paragraph>
          Our website may use cookies to enhance user experience. Cookies are
          small data files stored on your device that help us analyze web
          traffic and improve our content. You can choose to disable cookies in
          your browser settings.
        </Typography>

        <Typography variant="h5" gutterBottom>
          5. Third-Party Links
        </Typography>
        <Typography variant="body1" paragraph>
          Our website may contain links to third-party sites. We are not
          responsible for the privacy practices or content of these external
          sites.
        </Typography>

        <Typography variant="h5" gutterBottom>
          6. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions or concerns regarding this Privacy Policy,
          please contact us at aloabeauty23@gmail.com .
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
