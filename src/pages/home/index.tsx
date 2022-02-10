import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Spinner, Stack, Tag, Text, useColorModeValue as mode } from "@chakra-ui/react";

import { PageLayout } from "src/components/Layout/Pages/PageLayout.component";
import { Section } from "src/components/Layout/Section/Section.component";
import { H1, H2 } from "src/components/Text/Titles.component";

const Home: NextPage = () => {
  const [employmentHistory, setEmploymentHistory] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getEmploymentHistory = async () => {
    try {
      const res = await fetch("/api/getEmploymentHistory");
      const latestEmployment = await res.json();
      setEmploymentHistory(latestEmployment);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getEmploymentHistory();
  }, []);

  return (
    <PageLayout>
      <Section>
        <Stack spacing="4" shouldWrapChildren>
          <Tag size="lg" fontWeight="bold">
            Open to work
          </Tag>
          <H1>{`Hi, I'm Constant Druon, I'm a Frontend Engineer.`}</H1>
          <H2 color={mode("gray.500", "gray.400")}>
            I try to make the world a better place by creating quality software that improve the lives of those around
            me.
          </H2>
        </Stack>
      </Section>
      <Section>
        <Stack spacing="4" shouldWrapChildren>
          <H2>Employment history</H2>

          {!isLoading ? (
            <Stack>
              {employmentHistory.map((oneEmployment) => (
                <Text key={oneEmployment.id}>
                  {oneEmployment.fields.jobTitle} - {oneEmployment.fields.companyName}
                </Text>
              ))}
            </Stack>
          ) : (
            <Spinner />
          )}
        </Stack>
      </Section>
    </PageLayout>
  );
};
export default Home;
