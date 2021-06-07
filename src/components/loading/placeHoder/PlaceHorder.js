import React from "react";
import "./placeHorder.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Segment, Placeholder } from "semantic-ui-react";

function PlaceholderLoad(props) {
  const { data, dataProduct, showContentTab } = props;

  switch (showContentTab) {
    case 1:
      return (
        <div className="backgroundPlacehorder">
          {data?.map((item, index) => {
            return (
              <Grid
                key={index}
                columns={2}
                stackable
                style={
                  index % 2 !== 0
                    ? { flexDirection: "row-reverse", marginTop: 0 }
                    : { marginTop: 0 }
                }
              >
                <Grid.Column>
                  <Placeholder
                    style={
                      index % 2 === 0
                        ? {
                            height: 220,
                            marginRight: -15,
                            border: "15px solid white",
                          }
                        : {
                            height: 220,
                            marginLeft: -15,
                            border: "15px solid white",
                          }
                    }
                  >
                    <Placeholder.Image square />
                  </Placeholder>
                </Grid.Column>
                <Grid.Column>
                  <Placeholder
                    style={
                      index % 2 === 0
                        ? {
                            height: 220,
                            marginLeft: -15,
                            border: "20px solid white",
                          }
                        : {
                            height: 220,
                            marginRight: -15,
                            border: "20px solid white",
                          }
                    }
                  >
                    <Placeholder.Line
                      length="short"
                      style={{ paddingTop: 20 }}
                    />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder>
                </Grid.Column>
              </Grid>
            );
          })}
        </div>
      );
    case 2:
      return (
        <div className="backgroundPlacehorder">
          <Placeholder
            style={{ height: 210, marginTop: 10, border: "10px solid white" }}
          >
            <Placeholder.Image rectangular />
          </Placeholder>
          {data?.map((item, index) => {
            return (
              index !== 0 && (
                <Grid
                  key={index}
                  columns={2}
                  stackable
                  style={{ marginTop: 0 }}
                >
                  <Grid.Column>
                    <Placeholder
                      style={{
                        height: 125,
                        width: 130,
                        border: "10px solid white",
                      }}
                    >
                      <Placeholder.Image square />
                    </Placeholder>
                  </Grid.Column>
                  <Grid.Column>
                    <Placeholder
                      style={{
                        height: 125,
                        marginLeft: -60,
                        border: "20px solid white",
                        marginLeft: -75,
                      }}
                    >
                      <Placeholder.Line length="short" />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder>
                  </Grid.Column>
                </Grid>
              )
            );
          })}
        </div>
      );
    case 3:
      return (
        <div className="backgroundPlacehorder">
          <Placeholder
            style={{ height: 210, marginTop: 10, border: "10px solid white" }}
          >
            <Placeholder.Image rectangular />
          </Placeholder>
          <Grid columns={2} stackable style={{ marginTop: 0 }}>
            {data?.map((item, index) => {
              return (
                index !== 0 &&
                index !== 19 && (
                  <Grid.Column key={index}>
                    <Placeholder
                      style={{ height: 190, border: "10px solid white" }}
                    >
                      <Placeholder.Image square />
                    </Placeholder>
                    <Placeholder
                      style={{
                        marginTop: 0,
                        height: 127,
                        border: "20px solid white",
                      }}
                    >
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder>
                  </Grid.Column>
                )
              );
            })}
          </Grid>
          <Placeholder
            style={{
              height: 165,
              margin: "10px 0px",
              border: "10px solid white",
            }}
          >
            <Placeholder.Image rectangular />
          </Placeholder>
        </div>
      );
    case 4:
      return (
        <div className="backgroundPlacehorder">
          <div className="backgroundPlaceholder_rotate">
            {data?.map((item, index) => {
              return (
                <Grid.Column
                  key={index}
                  style={{ marginTop: 15, marginRight: 10 }}
                >
                  <Placeholder
                    style={{
                      height: 170,
                      width: 240,
                      marginBottom: -15,
                      border: "20px solid white",
                    }}
                  >
                    <Placeholder.Line style={{ paddingTop: 18 }} />
                    <Placeholder.Line style={{ paddingTop: 18 }} />
                    <Placeholder.Line style={{ paddingTop: 18 }} />
                    <Placeholder.Line style={{ paddingTop: 18 }} />
                    <Placeholder.Line style={{ paddingTop: 18 }} />
                    <Placeholder.Line style={{ paddingTop: 18 }} />
                    <Placeholder.Line style={{ paddingTop: 18 }} />
                  </Placeholder>
                  <Placeholder
                    style={{
                      height: 200,
                      width: 240,
                      marginRight: 15,
                      marginTop: 14,
                      border: "12px solid white",
                    }}
                  >
                    <Placeholder.Image square />
                  </Placeholder>
                </Grid.Column>
              );
            })}
          </div>
        </div>
      );
    case 10:
      return (
        <div className="backgroundPlacehorder">
          <Placeholder
            style={{ height: 210, marginTop: 10, border: "10px solid white" }}
          >
            <Placeholder.Image rectangular />
          </Placeholder>
          {dataProduct?.map((item, index) => {
            return (
              index !== 0 && (
                <Grid
                  key={index}
                  columns={2}
                  stackable
                  style={{ marginTop: 0 }}
                >
                  <Grid.Column>
                    <Placeholder
                      style={{
                        height: 170,
                        width: 170,
                        border: "10px solid white",
                      }}
                    >
                      <Placeholder.Image square />
                    </Placeholder>
                  </Grid.Column>
                  <Grid.Column>
                    <Placeholder
                      style={{
                        height: 170,
                        marginLeft: -35,
                        border: "30px solid white",
                      }}
                    >
                      <Placeholder.Line style={{ paddingTop: 10 }} />
                      <Placeholder.Line style={{ paddingTop: 20 }} />
                      <Placeholder.Line style={{ paddingTop: 20 }} />
                      <Placeholder.Line style={{ paddingTop: 20 }} />
                      <Placeholder.Line style={{ paddingTop: 20 }} />
                    </Placeholder>
                  </Grid.Column>
                </Grid>
              )
            );
          })}
        </div>
      );

    case 11:
      return (
        <div className="backgroundPlacehorder">
          <Placeholder
            style={{ height: 210, marginTop: 10, border: "10px solid white" }}
          >
            <Placeholder.Image rectangular />
          </Placeholder>
          {dataProduct.map((item, index) => {
            return (
              index % 4 === 0 && (
                <div key={index} className="backgroundAll">
                  <div className="backgroundAll_left">
                    <Grid.Column>
                      <Placeholder
                        style={{
                          height: 180,
                          width: 170,
                        }}
                      >
                        <Placeholder.Image square />
                      </Placeholder>
                      <Placeholder
                        style={{
                          width: 170,
                          height: 120,
                          marginTop: 0,
                          border: "20px solid white",
                        }}
                      >
                        <Placeholder.Line style={{ paddingTop: 16 }} />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                      </Placeholder>
                    </Grid.Column>
                  </div>
                  <div className="backgroundAll_right">
                    <Grid.Column
                      className="backgroundPlacehorder_right"
                      style={{ marginBottom: 8 }}
                    >
                      <Placeholder
                        style={{
                          height: 95,
                          border: "20px solid white",
                        }}
                      >
                        <Placeholder.Header image>
                          <Placeholder.Line />
                          <Placeholder.Line />
                          <Placeholder.Line />
                        </Placeholder.Header>
                      </Placeholder>
                    </Grid.Column>
                    <Grid.Column
                      className="backgroundPlacehorder_right"
                      style={{ marginBottom: 8 }}
                    >
                      <Placeholder
                        style={{
                          height: 95,
                          border: "20px solid white",
                        }}
                      >
                        <Placeholder.Header image>
                          <Placeholder.Line />
                          <Placeholder.Line />
                          <Placeholder.Line />
                        </Placeholder.Header>
                      </Placeholder>
                    </Grid.Column>
                    <Grid.Column
                      className="backgroundPlacehorder_right"
                      style={{ marginBottom: 8 }}
                    >
                      <Placeholder
                        style={{
                          height: 95,
                          border: "20px solid white",
                        }}
                      >
                        <Placeholder.Header image>
                          <Placeholder.Line />
                          <Placeholder.Line />
                          <Placeholder.Line />
                        </Placeholder.Header>
                      </Placeholder>
                    </Grid.Column>
                  </div>
                </div>
              )
            );
          })}
        </div>
      );

    default:
      return (
        <div className="backgroundPlacehorder">
          {data?.map((item, index) => {
            return (
              <Grid
                key={index}
                columns={2}
                stackable
                style={
                  index % 2 !== 0
                    ? { flexDirection: "row-reverse", marginTop: 0 }
                    : { marginTop: 0 }
                }
              >
                <Grid.Column>
                  <Placeholder style={{ height: 145 }}>
                    <Placeholder.Image square />
                  </Placeholder>
                </Grid.Column>
                <Grid.Column>
                  <Placeholder style={{ height: 145 }}>
                    <Placeholder.Line
                      length="short"
                      style={{ paddingTop: 19 }}
                    />
                    <Placeholder.Line
                      length="long"
                      style={{ paddingTop: 19 }}
                    />
                    <Placeholder.Line
                      length="long"
                      style={{ paddingTop: 19 }}
                    />
                    <Placeholder.Line
                      length="full"
                      style={{ paddingTop: 19 }}
                    />
                    <Placeholder.Line
                      length="full"
                      style={{ paddingTop: 19 }}
                    />
                    <Placeholder.Line
                      length="full"
                      style={{ paddingTop: 19 }}
                    />
                  </Placeholder>
                </Grid.Column>
              </Grid>
            );
          })}
        </div>
      );
  }
}

export default PlaceholderLoad;
