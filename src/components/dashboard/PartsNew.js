import React from "react";
import Logo from "../welcome/logo.png";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Divider,
  Grid,
  Form,
  Header,
  Icon,
  Image,
  List,
  Message,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Label,
  Table,
  Visibility,
  Checkbox,
  Input,
  Radio,
  Select,
  TextArea
} from "semantic-ui-react";
import FooterDashboard from "./FooterDashboard";
import PartsMenu from "./PartsMenu";

const optionsType = [
  { key: "ot1", text: "Manufactured", value: "manufactured" },
  { key: "ot2", text: "Purchased", value: "purchased" },
  { key: "ot3", text: "Other", value: "other" }
];
const optionsGroup = [
  {
    key: "og1",
    text: "737 Inspar Wing Ribs",
    value: "737_inspar_wing_ribs"
  },
  { key: "og2", text: "777 Slat Tracks", value: "777_slat_tracks" },
  { key: "og3", text: "787 Lower Frames ", value: "787_lower_Frames" },
  { key: "og3", text: "787 Crown Frames ", value: "787_crown_frames" },
  { key: "og3", text: "JSF F35 Bulkheads ", value: "F35_bulkheads" },
  { key: "og3", text: "JSF F35 Longerons ", value: "F35_longerons" }
];
const optionsClass = [
  { key: "oc1", text: "Machined Part", value: "machined_part" },
  { key: "oc2", text: "Assembly", value: "assembly" },
  { key: "oc3", text: "Processing Only", value: "processing_only" },
  { key: "oc3", text: "Inspection Only", value: "inspection_only" },
  { key: "oc3", text: "Shipped Loose", value: "shipped_loose" }
];

class PartsNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <Responsive>
        <Segment style={{ padding: "3.1em 0.1em" }} vertical>
          <PartsMenu />

          <Grid container stackable verticalAlign="middle">
            <Grid.Column mobile={16} tablet={14} computer={16} id="content">
              <Grid padded>
                <Divider section hidden />
                <Grid.Row>
                  <Header dividing size="huge" as="h1">
                    New Part Entry{" "}
                  </Header>
                </Grid.Row>

                <Grid.Row>
                  <Grid>
                    <Form>
                      <Form.Group widths="equal">
                        <Form.Field
                          control={Input}
                          label="Part Number"
                          placeholder="Part Number"
                          required
                          name="part_number"
                        />
                        <Form.Field
                          control={Input}
                          label="Part Name"
                          placeholder="Part Name"
                          required
                          name="part_name"
                        />
                        <Form.Field
                          control={Input}
                          label="Material"
                          placeholder="Material"
                          name="material"
                        />
                        <Form.Field
                          control={Input}
                          label="Material Specification"
                          placeholder="ANSI H35.2"
                          name="material_specification"
                        />
                      </Form.Group>
                      <Form.Group widths="equal">
                        <Form.Field
                          control={Select}
                          label="Type"
                          options={optionsType}
                          placeholder="Manufactured"
                          name="part_type"
                          required
                        />
                        <Form.Field
                          control={Select}
                          label="Group"
                          options={optionsGroup}
                          placeholder="737 Inspar Wing Ribs"
                          name="part_group"
                          required
                        />

                        <Form.Field
                          control={Select}
                          label="Class"
                          options={optionsClass}
                          placeholder="Assembly"
                          name="part_class"
                          required
                        />
                        <Form.Field
                          control={Input}
                          label="Sales Unit Price"
                          placeholder="0.0"
                          name="sales_price"
                        />
                      </Form.Group>
                      <Form.Field
                        control={TextArea}
                        label="Description"
                        placeholder="Description of part"
                        name="description"
                      />
                      <Form.Field
                        control={TextArea}
                        label="Engineering Data"
                        placeholder="Required Drawings, models, and Specifications"
                        name="engineering_data"
                      />
                      <Form.Group widths="equal">
                        <Form.Field
                          control={Input}
                          label="Routing Revision"
                          placeholder="-"
                          name="routing_revision"
                        />
                        <Form.Field
                          control={Input}
                          label="Primary Warehouse"
                          placeholder="Finished Goods Storage"
                          name="sales_price"
                        />
                        <Form.Field
                          control={Input}
                          label="Overall Dimensions"
                          placeholder=""
                          name="sales_price"
                        />
                        <Form.Field
                          control={Input}
                          label="Finished Weight"
                          placeholder="0.0 kg"
                          name="sales_price"
                        />
                      </Form.Group>
                      <Form.Group widths="equal">
                        <Form.Field
                          control={Checkbox}
                          label="Active in Production"
                        />
                        <Form.Field control={Checkbox} label="Track Lots" />
                      </Form.Group>
                      {/* <Form.Group>
                        <Grid.Row>
                          <Header dividing size="medium" as="h2">
                            Required Materials
                          </Header>
                        </Grid.Row>
                      </Form.Group>
                      <Form.Field control={Button} name="add_material">
                        Add new Material
                      </Form.Field>
                      <Form.Group widths="equal">
                        <Form.Field
                          control={Input}
                          label="Material (Part Number, Raw Material, Hardware etc.)"
                          placeholder=""
                          name="material"
                        />
                      </Form.Group>
                      <Form.Field control={Button} name="add_operation">
                        Add new Operation
                      </Form.Field>
                      <Form.Group widths="equal">
                        <Form.Field
                          control={Input}
                          label="Add Operation"
                          placeholder=""
                          name="material"
                        />
                      </Form.Group> */}

                      <Form.Field control={Button} name="submit">
                        Submit
                      </Form.Field>
                    </Form>
                  </Grid>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid>
        </Segment>
        <FooterDashboard />
      </Responsive>
    );
  }
}

export default PartsNew;
