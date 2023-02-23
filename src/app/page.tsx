"use client";

import MainLayout from "@/layout/MainLayout";
import CardContainer from "@/components/CardContainer";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Inputs from "@/components/Inputs";
import TermContainer from "@/components/TermContainer";
import Button from "@/components/Button";

export default function Home() {
  return (
    <MainLayout>
      {/* Card Container */}
      <CardContainer>
        {/* title */}
        <Title />

        {/* Description container */}
        <Description />

        {/* Inputs container */}
        <Inputs />

        {/* Term Container */}
        <TermContainer />

        {/* Button Container */}
        <Button />
      </CardContainer>
    </MainLayout>
  );
}
