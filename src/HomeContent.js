import React from "react";
import ghana from "./ghana-overlay.jpg";
import "./HomeContent.css";
import "./MediaQuery.css";
import { Container, Paper } from "@mui/material";
import allData from "./data.json";
import Footer from "./Footer";
import Header from "./Header";

export default function HomeContent() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="bgImageWrap">
          {/* <img src={ghana} alt='ghana city picture' width="100%" height="450px" /> */}
          {allData.map((data) => (
            <div
              className="bgImage"
              style={{
                backgroundImage: `url(${data.homeBgImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "450px",
              }}
            >
              <div className="bgImageText">
                {allData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h1>{data.title}</h1>
                      <p>{data.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        {/* <img src={require("./ghana-map.png")} alt="" usemap="#image-map" />

        <map name="image-map">
          <area
            target=""
            alt=""
            title="Ashanti"
            href=""
            coords="169,399,159,403,147,420,129,431,101,442,112,454,99,474,135,499,160,527,187,537,218,536,231,507,239,491,252,472,249,451,273,449,273,434,286,433,293,423,288,413,311,416,321,413,324,406,294,397,281,379,249,381,227,386,210,371,199,380,187,397,184,401"
            shape="poly"
          />
        </map> */}
        <div className="sections">
          <section className="people">
            <div className="cultureText">
              <h3>Lovely people of Ghana</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
            <div className="festivals">
              {/* <div>Homowo</div> */}
              <div>Aboakyir</div>
              <div>Akomase</div>
              {/* <div>Hogbetsotso</div> */}
            </div>
          </section>
          <section className="culture">
            <div className="cultureText">
              <h3>Experience the culture</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
            <div className="festivals">
              <div>Homowo</div>
              <div>Aboakyir</div>
              <div>Akomase</div>
              {/* <div>Hogbetsotso</div> */}
            </div>
          </section>
          <section className="foods">
            <div className="cultureText">
              <h3>Various traditional foods</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
            <div className="festivals">
              <div>Tuozaafi</div>
              <div>Fufu</div>
              <div>??t??</div>
              <div>Konkonte</div>
            </div>
          </section>
          <section className="destinations">
            <div className="cultureText">
              <h3>Popular destinations</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
            <div className="festivals">
              <div>Nzulezu Stilt Village</div>
              <div>kakum Forest</div>
              <div>Paga Crocodile Pond</div>
              <div>Boti Falls</div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
