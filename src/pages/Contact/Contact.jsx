import CustomBox from "../../Component/CustomBox";
import CustomCard from "../../Component/CustomCard";
import React, { useState } from "react";
import SendIcon from "../../Component/icons/SendIcon";
import { useForm } from "react-hook-form";
import { styled, useTheme } from "@mui/system";
import { H3, Paragraph, Span } from "../../Component/Typography";
import { Button, Container, Grid } from "@mui/material";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";

const InputFieldBox = styled("div")(({ theme }) => ({
  marginBottom: "16px",
  "& input": { marginBottom: "6px" },
  "& span": { color: theme.palette.warning.main },
}));

const inputStyle = {
  width: "100%",
  fontSize: "1rem",
  fontWeight: 400,
  border: "none",
  lineHeight: 1.5,
  color: "#495057",
  backgroundColor: "#fff",
  borderRadius: "0.25rem",
  padding: "0.375rem 0.75rem",
  transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
};

const StyledInput = styled("input")(({ theme }) => ({
  ...inputStyle,
  height: "calc(1.5em + 0.75rem + 2px)",
  "&:focus": {
    outline: "none",
    boxShadow: theme.shadows[1],
  },
}));

const StyledTextArea = styled("textarea")(({ theme }) => ({
  ...inputStyle,
  "&:focus": {
    outline: "none",
    boxShadow: theme.shadows[1],
  },
}));

const ButtonBox = styled("div")(({ theme }) => ({
  padding: "24px",
  position: "relative",
  textAlign: "center",
}));

const Error = styled("p")(({ theme }) => ({
  color: "white",
  position: "absolute",
  top: "-8px",
  left: "0",
  right: "0",
  margin: "auto",
}));

const Contact = () => {
  const [result, setResult] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const { palette } = useTheme();
  const { error, success } = palette;

  if (isSuccess) {
    setTimeout(() => setIsSuccess(false), 4000);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    fetch("https://jamirhossain-backend.herokuapp.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        if (data) {
          setIsSuccess(true);
          e.target.reset();
        }
      });
  };

  const firstWord = "Get In";
  const secondWord = "Touch";
  const buttonText = "Contact";

  return (
    <Container>
      <Breadcrumb
        firstWord={firstWord}
        secondWord={secondWord}
        buttonText={buttonText}
      />

      <Grid container spacing={3} sx={{ py: "3rem" }}>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={6}>
          <CustomCard sx={{ p: "24px" }}>
            <H3 sx={{ mb: "24px", textAlign: "center" }}>Contact With Me</H3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputFieldBox>
                <StyledInput
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                />
                {errors.name && <Span>Name is required</Span>}
              </InputFieldBox>

              <InputFieldBox>
                <StyledInput
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                />
                {errors.email && <Span>Email is required</Span>}
              </InputFieldBox>

              <InputFieldBox>
                <StyledInput
                  placeholder="Message Subject"
                  {...register("subject", { required: true })}
                />
                {errors.subject && <Span>Subject is required</Span>}
              </InputFieldBox>

              <InputFieldBox>
                <StyledTextArea
                  rows="4"
                  placeholder="Your Message"
                  {...register("message", { required: true })}
                />
                {errors.text && <Span>Message Body is required</Span>}
              </InputFieldBox>

              <ButtonBox>
                {isSuccess && (
                  <Error
                    sx={{ color: result.error ? error.main : success.main }}
                  >
                    {result.error
                      ? result.error
                      : result.success && result.success}
                  </Error>
                )}

                <Button
                  type="submit"
                  color="info"
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{ px: "32px" }}
                >
                  Send
                </Button>
              </ButtonBox>
            </form>
            <CustomBox sx={{ textAlign: "center" }}>
              <Paragraph fontStyle="italic">
                Sending to{" "}
                <Span sx={{ color: "#fff454", cursor: "pointer" }}>
                  jomirhossain008@gmail.com
                </Span>
              </Paragraph>
            </CustomBox>
          </CustomCard>
        </Grid>
        <Grid item xs={12} md={3}></Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
