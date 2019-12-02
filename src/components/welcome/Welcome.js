import React from "react";
import HomepageHeading from "./HomepageHeading";
import FooterWelcome from "./FooterWelcome";

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
// import Banner from "./banner-01.jpg";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const returnHeader = () => {
  if (window.innerWidth < 800) {
    return <HomepageHeading mobile />;
  } else {
    return <HomepageHeading />;
  }
};

function Welcome() {
  return (
    <Responsive>
      <Segment
        inverted
        textAlign="center"
        style={{
          minHeight: 300,
          padding: "2.5em 2.5em",
          background: `url(
            "https://444qsz2epfbh277kzua5uipr-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/banner-manufacturing.jpg"
          )`
        }}
        vertical
      >
        {returnHeader()}
      </Segment>

      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Surpass your business goals with Rapid Manufacturing ERP
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Rapid ERP brings all your manufacturing needs to one accessible
                hub. Say goodbye to maintaining multiple spreadsheets, paper
                forms, and slow approvals.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Make Apples that can read your mind
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Yes that's right, you thought it was the stuff of dreams, but
                even apples can peer into the depth of your soul and judge you
                silently.
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
            I am trying to grab your Attention
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Please pay attention to me. I am so desperate for attention that I'd
            do anything. I am so lonely oh god. Just kidding I'm not. I'm
            actually doing alright- at least I like to think that I am doing
            okay but who am I really kidding right?
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
            Did We Tell You About the time we were at band camp?
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            This one time at band camp I was just minding my own business when
            the teacher told me I needed to stop being lazy and practice more. I
            didn't listen after all. So here I am as a silly web developer.
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

export default Welcome;
