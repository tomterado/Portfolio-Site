import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

class MainLanding extends React.Component {
    render() {

        const styles = {
          container: {
            display: 'flex',
            marginBottom: '3rem',
          },
          container2: {
            flex: 1,
          },
          title: {
            fontSize: '5em',
            marginBottom: '3rem',
            textAlign: 'center',
          },
          secondaryTitle: {
            fontSize: '3rem',
            lineHeight: 1.5,
          },
          description: {
            fontSize: '2.5rem',
            lineHeight: 1.5,
            textAlign: 'center',
            marginBottom: '3rem',
          },
          shorterLine: {
            width: '350px',
            height: '7px',
            backgroundColor: '#000',
          },
          shorterLine2: {
            width: '350px',
            height: '7px',
            backgroundColor: '#000',
          },
          textStroke: {
            color: 'white',
            webkitTextStroke: '2px black', 
            textStroke: '2px black'
          },
          smallerTextStroke: {
            color: 'white',
            webkitTextStroke: '1px black', 
            textStroke: '1px black'
          }

        }

        return (

            <div style={styles.container}>
                <div style={{alignItems: 'center'}}>
                  <h1 style={styles.title}> tom terado <br/> <span style={styles.textStroke}> front-end developer</span>  </h1> 
                  {/* <h1 style={styles.title}> front-end developer </h1>  */}
                  {/* <h3 style={styles.secondaryTitle}> product.</h3> */}
                  {/* <h3 style={styles.secondaryTitle}> front-end developer.</h3> */}

                  <h3 style={styles.description}> passionate about <span style={styles.smallerTextStroke}> product design</span> and the relationship between <span style={styles.smallerTextStroke}>  tech </span> and <span style={styles.smallerTextStroke}> art.</span> </h3>
                  {/* <hr style={styles.shorterLine2}/> */}
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    {/* <img align="middle" src='https://ih1.redbubble.net/image.69173097.0090/ap,550x550,12x12,1,transparent,t.u1.png' /> */}
                    {/* <img align="middle" src='https://cdn.dribbble.com/users/43342/videos/24356/comp_1.mp4' /> */}
                    <iframe width="420" height="315"src="https://cdn.dribbble.com/users/43342/videos/24356/comp_1.mp4"> </iframe>
                    {/* <video width="320" height="240" src="https://cdn.dribbble.com/users/43342/videos/24356/comp_1.mp4"/> */}
                  </div>
                </div>
            </div>

        );
    }
};
export default MainLanding;