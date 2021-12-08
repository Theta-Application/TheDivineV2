import React, { useState } from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import reactLogo from "../img/React.js_logo-512.png";
import adobeLogo from "../img/136-adobe-512.png";
import "../css/skills.css";
import { Spring } from "react-spring/renderprops";
import { motion, AnimatePresence } from "framer-motion";
import SkillSlider from "./SkillSlider";
import useWindowDimensions from "./WindowSize";

function Skills() {
  const [skill, setSkill] = useState("  ");

  const [x, setX] = useState(-100);

  // width of window from window component
  const { width } = useWindowDimensions();

  const changeSkill = (event) => {
    event.preventDefault();

    let newSkill = event.target.name;

    setSkill(newSkill);
  };

  // variants for animation
  const parentList = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const goLeft = () => {
    setX(x + 100);
    x === 0 ? setX(-100 * 7) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * 7 ? setX(0) : setX(x - 100);
  };

  return (
    <AbsoluteWrapper>
      <div className="skillsPage">
        <div className="skillsBlock">
          {/* HTML */}
          <button onMouseEnter={changeSkill} name="HTML5">
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="100">
              {(props) => (
                <div name="HTML 5" style={props}>
                  <svg value="HTML5" viewBox="0 0 128 128">
                    <path
                      fill="#E44D26"
                      d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499 8.096-90.102h-88.862zm72.041 20.471l-.507 5.834-.223 2.695h-42.569l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69-22.79 6.134v-.005l-.027.012-22.777-5.916-1.546-17.055h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649 1.296-13.728h-38.555l-2.734-30.836-.267-3.164h55.724000000000004l-.266 2.471zM27.956 1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.738 7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.777 1.627h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.513 1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z"
                    ></path>
                  </svg>
                </div>
              )}
            </Spring>
          </button>
          {/* CSS */}
          <button onMouseEnter={changeSkill} name="CSS3">
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="200">
              {(props) => (
                <div style={props}>
                  <svg viewBox="0 0 128 128">
                    <path
                      fill="#1572B6"
                      d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063 8.078-90.48h-88.66zm69.21 50.488l-2.35 21.892.009 1.875-22.539 6.295v.001l-.018.015-22.719-6.225-1.537-17.341h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495 1.308-14.549h-25.907000000000004l-.222-2.355-.506-5.647-.265-2.998h27.886000000000003l1.014-11h-42.473l-.223-2.589-.506-6.03-.265-3.381h55.597l-.267 3.334-2.685 30.154"
                    ></path>
                    <path
                      fill="#1572B6"
                      d="M89 14.374l-7.149-8.374h7.149v-5h-16v4.363l8.39 7.637h-8.39v5h16zM70 14.374l-6.807-8.374h6.807v-5h-15v4.363l7.733 7.637h-7.733v5h15zM52 13h-8v-7h8v-5h-14v17h14z"
                    ></path>
                  </svg>
                </div>
              )}
            </Spring>
          </button>
          {/* Javascript */}
          <button onMouseEnter={changeSkill} name="JavaScript">
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="300">
              {(props) => (
                <div style={props}>
                  <svg viewBox="0 0 128 128">
                    <path
                      fill="#F0DB4F"
                      d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
                    ></path>
                  </svg>
                </div>
              )}
            </Spring>
          </button>
          {/* React */}
          <button onMouseEnter={changeSkill} name="React">
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="400">
              {(props) => (
                <div style={props}>
                  <img src={reactLogo} alt="react" />
                </div>
              )}
            </Spring>
          </button>
          {/* Node JS */}
          <button onMouseEnter={changeSkill} name="Node.js">
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="500">
              {(props) => (
                <div style={props}>
                  <svg width="100px" viewBox="0 0 128 128">
                    <path
                      fill="#83CD29"
                      d="M112.678 30.334l-44.143-25.605c-2.781-1.584-6.424-1.584-9.227 0l-44.488 25.605c-2.869 1.651-4.82 4.754-4.82 8.073v51.142c0 3.319 1.992 6.423 4.862 8.083l11.729 6.688c5.627 2.772 7.186 2.772 9.746 2.772 8.334 0 12.662-5.039 12.662-13.828v-50.49c.001-.713.446-1.774-.255-1.774h-5.622c-.712 0-2.122 1.061-2.122 1.773v50.49c0 3.896-3.616 7.773-10.202 4.48l-12.122-7.013c-.422-.23-.676-.693-.676-1.181v-51.142c0-.482.463-.966.891-1.213l44.378-25.561c.415-.235 1.002-.235 1.415 0l43.963 25.555c.421.253.354.722.354 1.219v51.142c0 .488.092.963-.323 1.198l-44.133 25.576c-.378.227-.87.227-1.285 0l-11.317-6.749c-.341-.198-.752-.269-1.08-.086-3.145 1.783-3.729 2.02-6.679 3.043-.727.253-1.799.692.408 1.929l14.798 8.754c1.416.82 3.027 1.246 4.647 1.246 1.642 0 3.249-.426 4.666-1.246l43.976-25.582c2.871-1.672 4.322-4.764 4.322-8.083v-51.142c-.001-3.319-1.452-6.414-4.323-8.073zM77.727 81.445c-11.727 0-14.309-3.235-15.17-9.066-.102-.628-.634-1.379-1.274-1.379h-5.73c-.709 0-1.28.86-1.28 1.566 0 7.466 4.06 16.512 23.454 16.512 14.038 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.104 0 12.46 1.954 13.841 8.091.119.577.646.991 1.241.991h5.754c.354 0 .691-.143.939-.396.241-.272.367-.613.336-.979-.893-10.569-7.913-15.494-22.112-15.494-12.632 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.956-3.978 7.067-13.308 7.067z"
                    ></path>
                  </svg>
                </div>
              )}
            </Spring>
          </button>
          {/* Express */}
          <button onMouseEnter={changeSkill} name="Express">
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="600">
              {(props) => (
                <div style={props}>
                  <svg viewBox="0 0 128 128">
                    <path d="M126.67,98.44c-4.56,1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89,76,81.85,85.2,75.14,94.77c-2.4,3.42-4.92,4.91-9.4,3.7L92.66,62.34,67.6,29.71c4.31-.84,7.29-.41,9.93,3.45,5.83,8.52,12.26,16.63,18.67,25.21C102.65,49.82,109,41.7,115,33.26c2.41-3.42,5-4.72,9.33-3.46-3.28,4.35-6.49,8.63-9.72,12.88-4.36,5.73-8.64,11.53-13.16,17.14-1.61,2-1.35,3.3.09,5.19C109.9,76,118.16,87.1,126.67,98.44Z"></path>
                    <path d="M1.33,61.74c.72-3.61,1.2-7.29,2.2-10.83,6-21.43,30.6-30.34,47.5-17.06C60.93,41.64,63.39,52.62,62.9,65H7.1c-.84,22.21,15.15,35.62,35.53,28.78,7.15-2.4,11.36-8,13.47-15,1.07-3.51,2.84-4.06,6.14-3.06-1.69,8.76-5.52,16.08-13.52,20.66-12,6.86-29.13,4.64-38.14-4.89C5.26,85.89,3,78.92,2,71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33,64.78,1.33,61.74ZM7.2,60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63,32.56,7.85,43.7,7.2,60.25Z"></path>
                  </svg>
                </div>
              )}
            </Spring>
          </button>
          {/* Git */}
          <button onMouseEnter={changeSkill} name="Git">
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="700">
              {(props) => (
                <div style={props}>
                  <svg viewBox="0 0 128 128">
                    <path
                      fill="#F34F29"
                      d="M124.742 58.378l-55.117-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.443 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.462 6.607 2.293 9.993l13.992 13.994c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.049-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-4.088-9.905-.311-13.683.934-.933 1.855-1.638 2.855-2.11v-34.659c-1-.472-1.92-1.172-2.856-2.111-2.861-2.86-3.396-7.06-1.928-10.576l-14.233-14.313-37.754 37.79c-3.175 3.177-3.155 8.325.02 11.5l55.126 55.114c3.173 3.174 8.325 3.174 11.503 0l54.86-54.858c3.175-3.176 3.178-8.327.004-11.501z"
                    ></path>
                  </svg>
                </div>
              )}
            </Spring>
          </button>
          {/* PYTHON */}
          <button onMouseEnter={changeSkill} name="Python">
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="800">
              {(props) => (
                <div style={props}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 32 32"
                  >
                    <defs>
                      <linearGradient
                        id="A"
                        x1="811.527"
                        y1="574.895"
                        x2="665.255"
                        y2="573.732"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#366a96" />
                        <stop offset="1" stopColor="#3679b0" />
                      </linearGradient>
                      <linearGradient
                        id="B"
                        x1="862.824"
                        y1="642.176"
                        x2="573.276"
                        y2="642.176"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#ffc836" />
                        <stop offset="1" stopColor="#ffe873" />
                      </linearGradient>
                    </defs>
                    <g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)">
                      <path
                        d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z"
                        fill="url(#A)"
                      />
                      <path
                        d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z"
                        fill="url(#B)"
                      />
                      <path
                        d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
              )}
            </Spring>
          </button>
          {/* PostgreSQL */}
          <button onMouseEnter={changeSkill} name="PostgreSQL">
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="900">
              {(props) => (
                <div style={props}>
                  <svg viewBox="0 0 128 128">
                    <path
                      fill="#336791"
                      d="M63.409 100.219c1.792 1.482 3.893 2.114 6.161 2.231.938.049 1.903.003 2.826-.165 1.464-.266 2.924-.6 4.348-1.029 2.9-.875 5.406-2.387 7.277-4.829 1.066-1.392 1.941-2.897 2.503-4.561.464-1.373.9-2.76 1.247-4.165.274-1.107.41-2.25.576-3.381.111-.748.178-1.504.247-2.259.112-1.225.229-2.448.31-3.676.057-.854.055-1.712.088-2.567.011-.261.053-.52.078-.779.021-.241.143-.324.389-.32.864.013 1.73.035 2.593-.004.967-.043 1.941-.085 2.893-.244 1.354-.227 2.701-.514 4.028-.86 1.568-.411 3.007-1.146 4.393-1.982 1.612-.975 3.084-2.118 4.275-3.591 1.039-1.282 1.531-2.768 1.28-4.389-.364-2.355-2.343-3.898-4.644-4.003-.834-.038-1.68.05-2.51.155-1.005.128-1.995.354-2.997.503-.692.104-1.393.15-2.083.222l-.019-.09c1.29-2.437 2.634-4.846 3.854-7.316.937-1.896 1.737-3.859 2.564-5.809 1.37-3.228 2.463-6.555 3.369-9.938.867-3.238 1.609-6.511 1.844-9.871.094-1.341.159-2.688.15-4.031-.006-1.072-.122-2.145-.229-3.213-.122-1.224-.492-2.384-1.004-3.5-.674-1.472-1.721-2.679-2.822-3.825-.881-.918-1.851-1.754-2.812-2.59-1.371-1.192-2.913-2.145-4.513-2.99-1.819-.96-3.73-1.712-5.724-2.22-1.206-.307-2.438-.578-3.658-.821-.436-.088-.876-.312-1.315-.312h-8.268c-.299 0-.595.196-.896.229-1.979.221-3.935.615-5.835 1.205-.71.219-1.358.091-2.033.028-.518-.048-1.027-.181-1.545-.207-1.971-.098-3.944-.24-5.916-.219-1.888.02-3.757.332-5.584.85-1.529.436-3.026.965-4.398 1.77-.586.344-1.052.279-1.659.105-2.041-.589-4.095-1.141-6.166-1.604-1.291-.289-2.62-.435-3.939-.571-1.265-.132-2.537-.21-3.809-.237-1.242-.027-2.492-.026-3.729.084-1.969.175-3.9.575-5.778 1.221-2.085.718-3.997 1.757-5.72 3.121-1.75 1.385-3.154 3.074-4.281 5.005-1.189 2.037-2.006 4.218-2.512 6.507-.275 1.241-.174 2.517-.363 3.777-.058.39.059.782.059 1.174v5.485c0 .364-.107.729-.061 1.095.113.879.074 1.765.223 2.638.234 1.382.445 2.759.729 4.131.397 1.917.776 3.832 1.216 5.74.32 1.389.667 2.77 1.048 4.143.58 2.098 1.146 4.199 1.803 6.272.611 1.927 1.307 3.826 2.002 5.726.962 2.628 2.11 5.171 3.49 7.607 1.195 2.111 2.558 4.088 4.388 5.713 1.207 1.072 2.548 1.895 4.109 2.307 1.228.322 2.478.361 3.733.104 1.457-.298 2.748-.926 3.895-1.865.132-.107.275-.19.432.008.594.752 1.388 1.254 2.219 1.687 2.242 1.17 4.685 1.521 7.166 1.663.602.034 1.208-.052 1.813-.068 1.181-.033 2.327-.263 3.454-.589.592-.171 1.169-.389 1.771-.591.031.641.071 1.257.091 1.874l.083 3.363c.016.512.036 1.024.083 1.534.122 1.314.241 2.628.398 3.938.108.903.222 1.812.434 2.694.428 1.778 1.006 3.509 1.742 5.188.721 1.646 1.76 3.037 3.148 4.184zm-3.591-16.768c-.071-1.579-.124-3.159-.159-4.739-.042-1.942-.056-3.885-.083-5.827l-.005-.074c-.987.593-1.96 1.241-2.989 1.776-1.207.627-2.517.99-3.874 1.093-1.063.08-2.142.153-3.2.069-1.736-.141-3.472-.412-5.026-1.268-.63-.347-1.288-.77-1.723-1.323-1.041-1.329-.542-3.008 1.028-3.816 1.085-.56 2.269-.793 3.445-1.065 1.021-.236 2.039-.505 3.036-.83.986-.323 1.608-1.123 2.223-1.908l.974-1.252-1.171-.122c-1.162-.108-2.271-.429-3.331-.899-.906-.401-.92-.445-1.586.277-1.11 1.205-2.19 2.44-3.279 3.666-.801.902-1.596 1.809-2.395 2.714-.788.895-1.528 1.84-2.379 2.672-1.262 1.236-2.784 1.979-4.6 1.895-1.165-.054-2.231-.462-3.191-1.129-1.979-1.378-3.312-3.308-4.527-5.333-1.555-2.596-2.75-5.361-3.771-8.201-.707-1.964-1.418-3.929-2.034-5.921-.671-2.165-1.26-4.355-1.839-6.547-.438-1.653-.826-3.32-1.196-4.99-.421-1.899-.825-3.803-1.182-5.715-.241-1.291-.38-2.601-.575-3.9-.263-1.753-.311-3.52-.215-5.279.085-1.585.312-3.165.538-4.739.313-2.178 1.031-4.233 2.063-6.174.633-1.189 1.416-2.27 2.323-3.274 1.49-1.649 3.293-2.84 5.299-3.735 1.401-.625 2.882-1 4.391-1.295 2.24-.436 4.5-.418 6.76-.372.988.021 1.973.2 2.96.299 2.126.211 4.209.659 6.266 1.21 1.5.402 2.969.924 4.455 1.376.148.045.367.041.49-.038 2.015-1.316 4.216-2.184 6.559-2.681.889-.188 1.807-.271 2.716-.329 1.104-.069 2.219-.135 3.321-.07 1.325.076 2.646.271 3.963.451.64.088 1.264.309 1.904.369.308.029.633-.194.957-.27 1.654-.383 3.301-.808 4.97-1.109 1.242-.224 2.512-.33 3.774-.402 1.41-.081 2.828-.14 4.236-.072 1.78.086 3.547.339 5.291.745 2.162.503 4.234 1.233 6.205 2.247 1.473.759 2.872 1.637 4.133 2.717.826.709 1.672 1.408 2.417 2.198.92.974 1.858 1.947 2.436 3.194.435.941.745 1.915.831 2.944.106 1.281.235 2.566.224 3.849-.011 1.226-.179 2.451-.297 3.675-.271 2.788-.876 5.516-1.613 8.208-.607 2.223-1.319 4.422-2.089 6.596-.709 2.003-1.528 3.969-2.355 5.928-.611 1.448-1.27 2.881-1.984 4.281-1.354 2.652-2.762 5.277-4.391 7.777-.281.431-.548.873-.822 1.314.711.479 1.516.648 2.326.736.771.083 1.557.134 2.327.076 1.233-.092 2.462-.268 3.688-.439 1.214-.17 2.403-.515 3.651-.424 1.244.091 2.136 1.037 2.051 2.203-.054.738-.393 1.371-.883 1.912-2.315 2.554-5.221 4.102-8.545 4.865-1.263.29-2.565.439-3.858.56-1.101.102-2.216.119-3.321.078-.812-.03-1.617-.216-2.447-.336-.084.759-.163 1.55-.259 2.338l-.387 3.023c-.117.958-.208 1.92-.329 2.878-.118.93-.265 1.855-.389 2.784-.115.865-.2 1.735-.33 2.599-.197 1.324-.386 2.651-.645 3.965-.31 1.57-.784 3.09-1.561 4.507-.946 1.729-2.287 3.046-3.995 4.021-1.76 1.005-3.685 1.528-5.634 1.966-1.382.311-2.803.361-4.202.234-2.425-.219-4.495-1.256-6.06-3.137-1.493-1.795-2.504-3.851-2.865-6.18-.174-1.107-.298-2.223-.396-3.339-.112-1.243-.186-2.487-.244-3.732zM62.544 67.497c.015.83-.071 1.66-.067 2.49.017 3.863.045 7.727.078 11.591.006.631.037 1.264.082 1.894.095 1.32.189 2.641.317 3.957.092.935.217 1.867.364 2.795.21 1.313.808 2.483 1.486 3.602.584.962 1.345 1.778 2.346 2.342 1.702.957 3.533 1.037 5.379.685 1.247-.237 2.473-.62 3.683-1.015 1.194-.389 2.273-1.024 3.178-1.901.849-.822 1.451-1.825 1.857-2.932.787-2.146 1.034-4.407 1.359-6.649.122-.84.228-1.682.339-2.523.127-.957.255-1.913.377-2.87.092-.714.174-1.427.261-2.14.125-1.024.256-2.047.375-3.071.091-.792.167-1.587.249-2.381.104-1.015.215-2.027.306-3.044.068-.77.04-1.555.177-2.312.251-1.387.907-2.567 2.137-3.331.514-.318 1.096-.528 1.666-.798l-.098-.149c-.527-.684-1.067-1.357-1.584-2.049-.812-1.086-1.396-2.297-1.983-3.514-.556-1.154-1.236-2.246-1.821-3.387-1.021-1.99-2.061-3.975-3.002-6.002-1.183-2.55-2.115-5.188-2.408-8.012-.125-1.194-.157-2.388.086-3.571.387-1.89 1.373-3.368 3.033-4.382 1.54-.94 3.255-1.244 5.012-1.339 1.09-.059 2.187-.011 3.318-.011l-.037-.191c-.704-1.472-1.361-2.969-2.132-4.405-1.086-2.028-2.478-3.856-4.026-5.553-1.146-1.255-2.389-2.419-3.75-3.45-1.338-1.013-2.748-1.918-4.253-2.657-1.794-.883-3.664-1.565-5.624-2-1.885-.418-3.78-.674-5.714-.695-1.648-.018-3.286.058-4.892.429-2.424.561-4.641 1.559-6.568 3.175-1.077.903-2.018 1.916-2.839 3.044-.967 1.325-1.745 2.759-2.411 4.26-.914 2.061-1.541 4.204-1.971 6.408-.214 1.1-.382 2.207-.553 3.314-.06.389-.064.784-.1 1.229l.732-.381.714-.32c2.417-1.105 4.92-1.816 7.61-1.735 1.144.034 2.236.261 3.254.762 1.95.962 3.09 2.597 3.586 4.665.342 1.428.577 2.884.805 4.337.178 1.134.361 2.28.381 3.424.029 1.672-.055 3.348-.146 5.019-.077 1.424-.374 2.825-.872 4.154-.904 2.416-1.912 4.793-2.853 7.195-.311.794-.55 1.615-.843 2.488l1.188.001c.144.003.291.007.43.04 1.081.255 2.02.745 2.789 1.577 1.028 1.104 1.566 2.396 1.593 3.893zM41.897 56.042c-.614-1.454-.983-2.971-1.094-4.538-.104-1.474.071-2.94.223-4.408.146-1.421.27-2.849.312-4.275.071-2.347-.087-4.688-.199-7.033-.067-1.396.095-2.809.219-4.208.112-1.26.252-2.523.491-3.765.399-2.084.93-4.138 1.685-6.129.715-1.888 1.539-3.725 2.699-5.38.797-1.136 1.699-2.195 2.566-3.305l-.258-.092c-2.823-.896-5.693-1.598-8.646-1.903-1.395-.145-2.796-.229-4.195-.313-.43-.025-.866.033-1.297.074-1.067.103-2.148.143-3.198.343-1.787.34-3.502.912-5.089 1.843-1.426.836-2.623 1.915-3.626 3.211-1.107 1.431-1.854 3.049-2.389 4.773-.632 2.035-.934 4.13-1.015 6.243-.071 1.853-.106 3.716.214 5.562.237 1.373.396 2.762.658 4.131.358 1.865.742 3.727 1.186 5.573.633 2.644 1.267 5.29 2.018 7.902.718 2.501 1.527 4.98 2.407 7.43.718 1.999 1.549 3.961 2.424 5.896.57 1.261 1.26 2.475 1.984 3.655.769 1.254 1.645 2.444 2.831 3.354 1.499 1.148 2.658 1.327 4.182.066.652-.539 1.203-1.207 1.771-1.842.901-1.008 1.771-2.046 2.669-3.059 1.143-1.289 2.3-2.565 3.449-3.85.243-.271.478-.551.714-.825l-.393-.343c-1.425-1.372-2.531-2.962-3.303-4.788zM85.238 17.639c.934 1.095 1.838 2.222 2.672 3.394 1.614 2.268 2.904 4.716 3.855 7.336.42 1.155.756 2.321.606 3.584-.104.885-.097 1.782-.174 2.672-.065.74-.183 1.476-.278 2.214-.144 1.112-.352 2.222-.414 3.339-.06 1.064.003 2.138.07 3.203.067 1.083.213 2.161.312 3.241.112 1.227.264 2.451.298 3.68.028 1.008-.062 2.021-.149 3.029-.105 1.213-.412 2.387-.87 3.512-.323.794-.708 1.562-1.071 2.356l.146.154.222.172.225-.4c1.888-2.977 3.568-6.068 5.021-9.277.938-2.066 1.812-4.162 2.654-6.27 1.311-3.281 2.35-6.653 3.151-10.094.36-1.544.636-3.112.88-4.68.191-1.226.349-2.466.385-3.703.037-1.312-.035-2.634-.156-3.942-.091-.988-.335-1.982-.953-2.787-.996-1.293-2.07-2.529-3.391-3.508-1.113-.823-2.223-1.67-3.416-2.362-1.893-1.099-3.942-1.829-6.083-2.327-2.091-.487-4.207-.697-6.337-.742-1.256-.027-2.518.108-3.771.227-1.136.106-2.265.288-3.408.438 1.227.69 2.438 1.304 3.578 2.027 2.4 1.52 4.552 3.349 6.396 5.514zM54.058 60.202c.775-2.48 1.832-4.85 2.855-7.232.831-1.933 1.284-3.968 1.435-6.06.075-1.031.055-2.075.004-3.109-.057-1.148-.148-2.301-.316-3.438-.215-1.454-.459-2.909-.803-4.336-.373-1.544-1.313-2.62-2.925-3.017-.981-.241-1.957-.231-2.95-.074-2.423.381-4.641 1.274-6.707 2.582-.416.263-.646.476-.573 1.071.152 1.264.185 2.548.179 3.823-.008 1.805-.085 3.61-.153 5.414-.022.587-.107 1.173-.171 1.758-.096.896-.283 1.791-.277 2.686.006.922.1 1.865.324 2.758.711 2.832 2.215 5.148 4.682 6.783 1.517 1.006 3.195 1.512 5.038 1.609.122-.423.235-.822.358-1.218zm-2.896-24.289c-.325-.681-.139-1.246.613-1.508.184-.063.372-.133.562-.151.263-.026.528-.007.793-.007.955.006 1.873.139 2.66.745.506.39.642.905.314 1.437-.465.753-1.172 1.131-2.042 1.203-1.369.113-2.33-.525-2.9-1.719zM89.137 35.664l.311-2.725c.045-.364-.146-.464-.452-.473-.963-.026-1.925-.061-2.888-.077-1.084-.02-2.141.154-3.145.566-1.114.459-1.962 1.193-2.309 2.406-.259.904-.328 1.807-.236 2.752.139 1.441.459 2.839.963 4.18.674 1.793 1.378 3.585 2.221 5.303 1.141 2.325 2.431 4.577 3.643 6.867.323.611.597 1.25.934 1.963.707-1.496 1.051-2.994 1.09-4.538.033-1.301-.07-2.605-.146-3.906-.047-.796-.16-1.588-.237-2.382-.107-1.106-.271-2.213-.297-3.322-.025-1.128.055-2.262.151-3.389.09-1.078.268-2.149.397-3.225zm-2.169-.874c-.358.987-1.122 1.545-2.114 1.708-.924.153-1.734-.188-2.336-.926-.429-.525-.265-1.146.378-1.502.738-.408 1.549-.511 2.506-.573.261.047.651.088 1.023.193.539.152.739.56.543 1.1zM58.37 65.193c-.528-.432-1.228-.457-1.73.017-.624.59-1.173 1.264-1.722 1.928-.633.768-1.229 1.566-2.045 2.161-1.189.865-2.578 1.223-3.972 1.562-1.108.27-2.222.521-3.333.779l-.014.144c.33.152.649.343.994.452 1.695.536 3.42.804 5.212.652 1.292-.111 2.524-.393 3.691-.946 1.607-.761 2.844-1.968 3.895-3.37.176-.234.256-.58.276-.882.071-1.066-.47-1.859-1.252-2.497zM89.315 64.731c-.831.279-1.507.704-1.708 1.603-.137.608-.187 1.237-.24 1.86-.01.11.127.312.231.34.64.169 1.284.368 1.938.427.805.073 1.623.05 2.433.01.874-.044 1.754-.101 2.616-.245 2.029-.342 3.994-.896 5.738-2.048.63-.415 1.252-.839 1.878-1.261l-.052-.089c-.667.099-1.332.22-2.002.291-1.364.146-2.729.3-4.098.379-.661.038-1.331-.089-1.997-.143-1.118-.091-2.21-.339-3.155-.937-.545-.344-1.001-.382-1.582-.187z"
                    ></path>
                    <path
                      fill="#336791"
                      d="M2.835 103.184c1.093-.182 2.522-.338 4.343-.338 2.235 0 3.874.52 4.914 1.456.962.832 1.534 2.106 1.534 3.667 0 1.586-.469 2.834-1.353 3.744-1.196 1.274-3.146 1.924-5.356 1.924-.676 0-1.3-.026-1.819-.156v7.021h-2.263v-17.318zm2.263 8.45c.494.13 1.118.182 1.872.182 2.729 0 4.394-1.326 4.394-3.744 0-2.314-1.638-3.432-4.134-3.432-.988 0-1.742.078-2.132.182v6.812zM27.328 114.104c0 4.654-3.225 6.683-6.267 6.683-3.406 0-6.032-2.496-6.032-6.475 0-4.212 2.756-6.682 6.24-6.682 3.615-.001 6.059 2.626 6.059 6.474zm-9.984.13c0 2.756 1.586 4.836 3.822 4.836 2.184 0 3.821-2.054 3.821-4.888 0-2.132-1.065-4.836-3.77-4.836s-3.873 2.496-3.873 4.888zM29.901 118.16c.676.442 1.872.91 3.016.91 1.664 0 2.444-.832 2.444-1.872 0-1.092-.649-1.69-2.34-2.314-2.262-.806-3.328-2.054-3.328-3.562 0-2.028 1.638-3.692 4.342-3.692 1.274 0 2.393.364 3.095.78l-.572 1.664c-.494-.312-1.404-.728-2.574-.728-1.352 0-2.106.78-2.106 1.716 0 1.04.755 1.508 2.393 2.132 2.184.832 3.302 1.924 3.302 3.796 0 2.21-1.716 3.77-4.706 3.77-1.378 0-2.652-.338-3.536-.858l.57-1.742zM43.266 104.301v3.614h3.275v1.742h-3.275v6.786c0 1.56.441 2.444 1.716 2.444.598 0 1.04-.078 1.326-.156l.104 1.716c-.441.182-1.144.312-2.027.312-1.066 0-1.925-.338-2.471-.962-.649-.676-.884-1.794-.884-3.276v-6.864h-1.95v-1.742h1.95v-3.016l2.236-.598zM59.802 107.916c-.053.91-.104 1.924-.104 3.458v7.306c0 2.886-.572 4.654-1.794 5.747-1.222 1.144-2.99 1.508-4.576 1.508-1.508 0-3.172-.364-4.187-1.04l.572-1.742c.832.52 2.132.988 3.692.988 2.34 0 4.056-1.222 4.056-4.394v-1.404h-.052c-.702 1.17-2.054 2.106-4.004 2.106-3.12 0-5.356-2.652-5.356-6.137 0-4.264 2.782-6.682 5.668-6.682 2.185 0 3.381 1.144 3.927 2.184h.052l.104-1.898h2.002zm-2.366 4.966c0-.39-.026-.728-.13-1.04-.416-1.326-1.534-2.418-3.198-2.418-2.185 0-3.744 1.846-3.744 4.758 0 2.47 1.248 4.524 3.718 4.524 1.404 0 2.678-.884 3.172-2.34.13-.39.183-.832.183-1.222v-2.262zM63.337 111.842c0-1.482-.026-2.756-.104-3.926h2.003l.077 2.47h.104c.572-1.69 1.95-2.756 3.484-2.756.26 0 .441.026.649.078v2.158c-.233-.052-.468-.078-.779-.078-1.612 0-2.757 1.222-3.068 2.938-.052.312-.104.676-.104 1.066v6.708h-2.262v-8.658zM72.854 114.624c.052 3.094 2.027 4.368 4.315 4.368 1.639 0 2.626-.286 3.484-.65l.39 1.638c-.806.364-2.184.78-4.186.78-3.874 0-6.188-2.548-6.188-6.344 0-3.796 2.236-6.787 5.902-6.787 4.108 0 5.2 3.614 5.2 5.928 0 .468-.052.832-.078 1.066h-8.839zm6.708-1.638c.025-1.456-.599-3.718-3.172-3.718-2.314 0-3.328 2.132-3.511 3.718h6.683zM84.371 117.744c1.014.624 2.496 1.144 4.056 1.144 2.314 0 3.666-1.222 3.666-2.99 0-1.638-.936-2.574-3.302-3.484-2.86-1.014-4.628-2.496-4.628-4.966 0-2.73 2.262-4.758 5.668-4.758 1.794 0 3.094.416 3.874.858l-.624 1.846c-.572-.312-1.742-.832-3.328-.832-2.392 0-3.302 1.43-3.302 2.626 0 1.638 1.065 2.444 3.484 3.38 2.964 1.145 4.472 2.574 4.472 5.148 0 2.704-2.002 5.044-6.136 5.044-1.69 0-3.536-.494-4.473-1.118l.573-1.898zM111.957 123.074c-2.366-.624-4.68-1.326-6.708-2.028-.364-.13-.728-.26-1.066-.26-4.16-.156-7.722-3.224-7.722-8.866 0-5.616 3.432-9.23 8.164-9.23 4.758 0 7.853 3.692 7.853 8.866 0 4.498-2.08 7.384-4.992 8.398v.104c1.742.442 3.64.858 5.122 1.118l-.651 1.898zm-1.872-11.414c0-3.51-1.819-7.125-5.538-7.125-3.822 0-5.694 3.536-5.668 7.333-.026 3.718 2.028 7.072 5.564 7.072 3.615 0 5.642-3.276 5.642-7.28zM115.414 102.976h2.263v15.626h7.488v1.898h-9.751v-17.524z"
                    ></path>
                  </svg>
                </div>
              )}
            </Spring>
          </button>
          {/* PHP */}
          <button onMouseEnter={changeSkill} name="PHP">
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="1000">
              {(props) => (
                <div style={props}>
                  <svg viewBox="0 0 128 128">
                    <path
                      fill="#6181B6"
                      d="M64 33.039c-33.74 0-61.094 13.862-61.094 30.961s27.354 30.961 61.094 30.961 61.094-13.862 61.094-30.961-27.354-30.961-61.094-30.961zm-15.897 36.993c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34h14.04c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515-.759 1.357-1.75 2.624-2.972 3.748zm21.311 2.968l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528l-3.031 15.241h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zM38.934 54h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458s-2.772-1.721-5.546-1.721z"
                    ></path>
                  </svg>
                </div>
              )}
            </Spring>
          </button>
          {/* Adobe */}
          <button onMouseEnter={changeSkill} name="Adobe Creative Suite">
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="1100">
              {(props) => (
                <div style={props}>
                  <img src={adobeLogo} alt="adobe" />
                </div>
              )}
            </Spring>
          </button>
          {/* AWS */}
          <button onMouseEnter={changeSkill} name="AWS">
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="1200">
              {(props) => (
                <div style={props}>
                  <svg
                    height="100%"
                    viewBox="-.1 1.1 304.9 179.8"
                    width="100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2s-7.4-11.2-7.4-19.2c0-8.5 3-15.4 9.1-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8s7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3s-7.3 2-10.8 3.4c-1.6.7-2.8 1.1-3.5 1.3s-1.2.3-1.6.3c-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5s1.4-1.4 2.8-2.1c3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8s6.8-3.4 9.5-6.4c1.6-1.9 2.8-4 3.4-6.4s1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7s-6.3-.6-9.4-.6c-6.7 0-11.6 1.3-14.9 4s-4.9 6.5-4.9 11.5c0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9l-23.5-77.3c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9s2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6s-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9s-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1s-1.5-2-1.9-4l-15.5-64.5-15.4 64.4c-.5 2-1.1 3.3-1.9 4s-2.2 1-4 1zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8s-8.9-2.5-11.5-4c-1.6-.9-2.7-1.9-3.1-2.8s-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3s1.5.6 2.5 1c3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3s5.2-5.4 5.2-9.5c0-2.8-.9-5.1-2.7-7s-5.2-3.6-10.1-5.2l-14.5-4.5c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1s4.2-6 7.2-8.2c3-2.3 6.4-4 10.4-5.2s8.2-1.7 12.6-1.7c2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6s3.2 1.2 4.2 1.8c1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8s-4.7 4.8-4.7 8.9c0 2.8 1 5.2 3 7.1s5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6s4.6 8.8 4.6 14c0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"
                      fill="#252f3e"
                    />
                    <g clipRule="evenodd" fill="#f90" fillRule="evenodd">
                      <path d="m273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z" />
                      <path d="m287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z" />
                    </g>
                  </svg>
                </div>
              )}
            </Spring>
          </button>
        </div>
        <div className="emptyBorderSkills"></div>
        <h3 className="skill">{skill}</h3>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={parentList}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="managerialBlocks"
            onMouseEnter={() => setSkill("  ")}
          >
            <SkillSlider x={x} />
            {width < 955 ? (
              <>
                <button className="goLeft" onClick={goLeft}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="goRight" onClick={goRight}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </>
            ) : null}
            <div className="whatWeDo">
              <div className="solutionsBlock">
                <div className="listedSolutions">
                  <button
                    onClick={() => setX(0)}
                    className={x === 0 ? "solution solutionActive" : "solution"}
                  >
                    <i className="fa fa-angle-double-left"></i>
                    <p>UI / UX Design</p>
                  </button>
                  <button
                    onClick={() => setX(-100)}
                    className={
                      x === -100 ? "solution solutionActive" : "solution"
                    }
                  >
                    <i className="fa fa-angle-double-left"></i>
                    <p>Web Applications</p>
                  </button>
                  <button
                    onClick={() => setX(-200)}
                    className={
                      x === -200 ? "solution solutionActive" : "solution"
                    }
                  >
                    <i className="fa fa-angle-double-left"></i>
                    <p>Mobile Responsiveness</p>
                  </button>
                  <button
                    onClick={() => setX(-300)}
                    className={
                      x === -300 ? "solution solutionActive" : "solution"
                    }
                  >
                    <i className="fa fa-angle-double-left"></i>
                    <p>Custom Business Software</p>
                  </button>
                  <button
                    onClick={() => setX(-400)}
                    className={
                      x === -400 ? "solution solutionActive" : "solution"
                    }
                  >
                    <i className="fa fa-angle-double-left"></i>
                    <p>System Design Integration</p>
                  </button>
                  <button
                    onClick={() => setX(-500)}
                    className={
                      x === -500 ? "solution solutionActive" : "solution"
                    }
                  >
                    <i className="fa fa-angle-double-left"></i>
                    <p>Database Management</p>
                  </button>
                  <button
                    onClick={() => setX(-600)}
                    className={
                      x === -600 ? "solution solutionActive" : "solution"
                    }
                  >
                    <i className="fa fa-angle-double-left"></i>
                    <p>User Authentication</p>
                  </button>
                  <button
                    onClick={() => setX(-700)}
                    className={
                      x === -700 ? "solution solutionActive" : "solution"
                    }
                    id="lastSolution"
                  >
                    <i className="fa fa-angle-double-left"></i>
                    <p>Graphic / Video Production</p>
                  </button>
                </div>
                <div className="additionalSolutions">
                  <h4>Additional Skills:</h4>
                  <div className="addSolution">
                    <img
                      src="https://i.imgur.com/H4dvwyw.png"
                      alt="Custom Reports"
                    />
                    <p>Copywriting/ Scriptwriting</p>
                  </div>
                  <div className="addSolution">
                    <img src="https://i.imgur.com/TcNPuot.png" alt="code" />
                    <p>Framework Tutorials</p>
                  </div>
                  <div className="addSolution">
                    <img src="https://i.imgur.com/zHR1vXR.png" alt="block" />
                    <p>Algorithmic Services</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </AbsoluteWrapper>
  );
}

export default Skills;
