import { QUOTEDPRODUCTS } from "@/app/(modules)/landing/stores/quoted-products.store";
import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from "@react-email/components";
import * as React from "react";

export interface InscriptionEmailProps {
  clientName: string;
  companyName: string;
  quotedProducts?: QUOTEDPRODUCTS[];
}

export const NewEmailCustomer = ({ clientName, companyName, quotedProducts }: InscriptionEmailProps) => (
  <Html>
    <Head />
    <Preview>Ceisa Hn</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* <Img width="170" src={"https://platinosoftware.blob.core.windows.net/develop/logo_black.png"} alt="Logo ceisa Hn" style={logo} /> */}
        <Text style={paragraph}>Hola {clientName},</Text>
        <Text style={paragraph}>Gracias por visitar nuestro sitio web</Text>
        <Text style={paragraph}></Text>
        {quotedProducts && (
          <Section style={quotedProductsContainer}>
            <Text style={paragraph}>Productos Cotizados:</Text>
            {quotedProducts.map((quotedProduct, index) => (
              <Text key={index} style={paragraph}>
                {quotedProduct.product.name} - Cantidad: {quotedProduct.quantity}
              </Text>
            ))}
          </Section>
        )}
        <Text style={paragraph}>Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://www.ceisa.hn/">
            Visítanos en nuestro sitio web
          </Button>
        </Section>
        <Text style={paragraph}>
          Saludos cordiales,
          <br />
          {companyName}
        </Text>
        <Hr style={hr} />
        <Text style={footer}>info@ceisa.hn</Text>
        <Text style={footer}>+504-2545-8475</Text>
        <Text style={footer}>Intersección Belén-Country, avenida Cabañas, Comayagüela</Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  display: "block",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  marginBottom: "20px",
};

const quotedProductsContainer = {
  marginBottom: "20px",
};

const btnContainer = {
  textAlign: "center" as const,
  marginBottom: "20px",
};

const button = {
  backgroundColor: "#F6AA1C",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  textAlign: "center" as const,
  display: "block",
  marginBottom: "10px",
};
