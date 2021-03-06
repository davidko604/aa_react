import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import FooterWelcome from "./FooterWelcome";

function Features() {
  return (
    <Responsive>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                So many great Features
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Rapid ERP brings all your manufacturing needs to one accessible
                hub. Say goodbye to maintaining multiple spreadsheets, paper
                forms, and slow approvals.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                We can give you the world
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Yes, the world can be in the palm of your hands. If it were hard
                at all, you wouldn't be our client. Make your dreams come true.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                bordered
                rounded
                size="large"
                src="https://pbs.twimg.com/media/Diim1oMWsAAHj61.jpg"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge">Check Them Out</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "Rapid Manufacturing ERP system was my third and final wish."
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <center>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Aladdin_Disney_pose.png/220px-Aladdin_Disney_pose.png"
                    height="150px"
                  />
                </center>
                <b>Aladdin</b>
                <br /> First President of the World
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "I shouldn't have gone with their competitor."
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <center>
                  <Image
                    src="https://vignette.wikia.nocookie.net/scroogemcduck/images/3/31/DT2017_Scrooge_McDuck.png/revision/latest?cb=20171203141439"
                    height="150px"
                  />
                </center>
                <b>Scrooge McDuck</b>
                <br /> Richest Duck in the world
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Instead of focusing on content creation and hard work, we have
            learned how to master the art of doing nothing by providing massive
            amounts of whitespace and generic content that can seem massive,
            monolithic and worth your attention.
          </p>
          <Button as="a" size="large">
            Read More
          </Button>
          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <a href="#">Case Studies</a>
          </Divider>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Yes I know you probably disregarded the earlier boasts as
            non-sequitur filler content, but it's really true. It took years of
            gene splicing and combinatory DNA research, but our bananas can
            really dance.
          </p>
          <Button as="a" size="large">
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment>
      <FooterWelcome />
    </Responsive>
  );
}

export default Features;
