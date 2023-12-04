import { Container } from "@react-email/container";
import { Html } from "@react-email/html";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";

const EmailWelcome = () => {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>
            Hi my friend, we come from the Doct app! 🎉
          </Text>
          <Text style={paragraph}>
            Thank you believed and used our app 😍😍. We'll bring to experience
            wonderful and Doctors professional in the world! Good have a nice
            day ❤️
          </Text>
        </Container>
      </Section>
    </Html>
  );
};

export default EmailWelcome;

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
