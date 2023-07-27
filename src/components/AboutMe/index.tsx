import { UserImage } from "@/pages/home/style";
import { Box, Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { userData } from "@/utils/userData";
import { AboutMe as AboutMeWrapper } from "./style";

export const AboutMe = (): JSX.Element => {
  return (
    <AboutMeWrapper id="about-me">
      <Container>
        <Flex>
          <UserImage
            src={`https://github.com/${userData.githubUser}.png`}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={"150px"}
            height={"150px"}
          />
          <Box css={{ marginLeft: "$2" }}>
            <Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
              About Me:
            </Text>
            <Text type="body1" color="grey2">
              A gamer, geek, pet father (Fubá 🐶), technology lover who is in
              career transition.
            </Text>
            <Text type="body1" color="grey2">
              -🌱 Technology I'm currently learning: Java Java
            </Text>
            <Text type="body1" color="grey2">
              -📝 Tech Course: FullStack Developer certified by Kenzie Academy
              Brazil
            </Text>
            <Text type="body1" color="grey2">
              -🎓Graduation: Law. - I deeply value the experience gained and the
              impact that training had on my life, but technology is my great
              passion.
            </Text>
          </Box>
        </Flex>
        <Flex
          css={{
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "$2",
          }}
        ></Flex>
      </Container>
    </AboutMeWrapper>
  );
};
