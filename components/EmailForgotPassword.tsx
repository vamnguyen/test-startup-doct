import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Html } from "@react-email/html";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";

const EmailForgotPassword = () => {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Hi there!</Text>
          <Text style={paragraph}>Welcome to our Doctsyl app!</Text>
          <Button
            className="-bg--primary text-white font-semibold text-base rounded h-10 w-40 !flex items-center justify-center"
            href="/newPassword"
          >
            Reset Password
          </Button>
        </Container>
      </Section>
    </Html>
  );
};

export default EmailForgotPassword;

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};
