import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ROUTE } from '../../configs/constants';

const Footer: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === ROUTE.HOME;
  return (
    <>
    {!isHomePage ?
      (<footer className="mt-5 md:mt-40 pb-20 md:pb-40">
        <section className="wrapper border-t border-nt-grey-light pt-16">
          <div className="flex flex-wrap flex-col lg:flex-row items-center md:items-start">
            <Link
              to="/"
              className="md:hidden mb-10 nuxt-link-active"
              aria-label="Home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1096.38 141.85"
                className="fill-current text-white w-155 md:w-200"
              >
                <g className="cls-1">
                  <path
                    fill="#000000"
                    d="M14.14,70c0-50.89.28-32.56.14-59.91,0-5.5.42-7,1.55-7s3.52,3.1,4.93,4.51c2.12,2.4,23.12,25.09,44.83,48.35C79.54,70.8,94.91,88,99.42,92.65L97.87,21c-.14-9.16-1.13-12.26-5.5-13.39A29.49,29.49,0,0,0,86.31,7c-1.55,0-2-.43-2-1,0-.85,1.13-1,2.82-1,6.35,0,13.11.43,14.66.43S108,5,113.8,5c1.55,0,2.53.14,2.53,1,0,.56-.56.85-1.55,1s-2,.28-3.66.56c-4,.85-4.94,3-4.94,12.69l-.28,82.32c0,9.3-.28,10-1.27,10s-2.82-1.55-10.29-9c-1.55-1.41-21.85-22.13-36.79-38.2C41.2,47.69,25.27,29.92,20.76,24.85l1.83,67.52c.29,11.56,1.7,15.22,5.5,16.35a30.69,30.69,0,0,0,7.05.85c.7,0,1.13.28,1.13.84,0,.85-.85,1.13-2.54,1.13-8,0-13.67-.42-14.94-.42s-7.19.42-13.54.42c-1.4,0-2.25-.14-2.25-1.13,0-.56.42-.84,1.13-.84a20.13,20.13,0,0,0,5.78-.85c3.52-1,4.23-5.07,4.23-17.9Z"
                    style={{ opacity: "0.4" }}
                  />
                  <path
                    fill="#000000"
                    d="M152.55,55.58c0-18.61,0-22-.28-25.8s-1.13-5.92-4.09-6.48c-1.41-.28-2.4-.28-3.25-.42s-1.55-.43-1.55-1c0-.71.57-1,2.12-1,4.37,0,12.4.43,12.83.43s8.74-.43,12.68-.43c1.41,0,2.12.28,2.12,1,0,.56-.42.84-1.55,1-.85.14-1.55.14-2.54.28-4.09.56-4.51,2.68-4.79,6.76-.28,3.81-.14,7-.14,25.66V76.72c0,10.86-.14,20.73.56,25.8.56,4.09,1.13,5.64,4.79,6.48a32.08,32.08,0,0,0,5.36.57c1.27.14,1.55.42,1.55,1s-.56,1-2,1c-7.19,0-15.37-.42-16.07-.42-.43,0-8.74.42-12.69.42-1.27,0-2.26-.28-2.26-1,0-.56.57-1,1.84-1a16.45,16.45,0,0,0,3.38-.43c2.4-.56,2.82-3.38,3.24-6.76.71-5.08.71-15.08.71-25.66Z"
                    style={{ opacity: "0.4" }}
                  />
                  <path
                    fill="#000000"
                    d="M207.52,25c0-4.37.42-5.78,1.55-5.78S212.45,22,213.44,23C214.71,24.43,234.3,44.44,254,64.6c11,10.71,25.1,25.23,28.76,28.62l-1.55-58.64c-.14-7.62-1-10.15-4.79-11.14a35.68,35.68,0,0,0-5.5-.56c-1.41,0-1.69-.57-1.69-1.13,0-.71,1.13-.85,2.54-.85,6.06,0,12,.43,13.25.43s5.78-.43,11.27-.43c1.55,0,2,.14,2,.85,0,.56-.43,1-1.27,1.13s-2,.14-3.53.42c-3.24.7-4.23,2.11-4.23,10.57L289,104.63c0,7.05-.28,7.76-1.27,7.76s-2.39-1-9.3-7.47c-.56-.29-20.16-19.74-32.42-31.72C231.34,58,217.24,43.32,213.72,39.65l1.83,55.12c.28,9.72,1.13,13.39,4.65,14.23a24.2,24.2,0,0,0,5.78.57c1.13,0,1.69.42,1.69,1,0,.71-.7,1-2.25,1-7.61,0-12.69-.42-13.67-.42s-6.21.42-12.27.42c-1.27,0-2.11-.14-2.11-1,0-.56.56-1,2-1a13.93,13.93,0,0,0,4.37-.57c3.1-1,3.81-4.79,3.81-15.08C207.52,26.68,207.66,48.39,207.52,25Z"
                    style={{ opacity: "0.4" }}
                  />
                  <path
                    fill="#000000"
                    d="M342.27,82.5c0,20.3.14,28.2-3.81,37.22-2.54,6.06-8.18,11.7-19.17,19-1.55.84-3.67,2.39-4.93,3-.15.14-.43.14-.85.14s-1-.14-1-.71c0-.84.85-1.12,1.84-1.83a17.77,17.77,0,0,0,3.94-3c8.46-8,12.55-14.1,12.55-46.38V55.58c0-18.61,0-21.85-.28-25.66s-1.55-5.78-5.5-6.76a37.81,37.81,0,0,0-4.23-.28c-.42,0-1-.43-1-.85,0-.85.71-1.13,2.12-1.13,5.92,0,14.09.43,14.52.43s8.88-.43,12.82-.43c1.41,0,2,.28,2,1.13a1.06,1.06,0,0,1-.85.85c-.84,0-1.69.14-3.24.28-3.24.7-4.37,2.82-4.65,6.9-.28,3.81-.28,6.91-.28,25.52Z"
                    style={{ opacity: "0.4" }}
                  />
                  <path
                    fill="#000000"
                    d="M392.72,77.15a1.47,1.47,0,0,0-1.4,1.12l-6.21,17.62c-1.41,4-2.39,7.76-2.39,10,0,2.54,1.55,3.67,4.65,3.67h1c1.26,0,1.69.42,1.69,1,0,.71-1.13,1-2.12,1-3.1,0-9.58-.42-11.13-.42s-7.62.42-13.54.42c-1.55,0-2.25-.28-2.25-1,0-.56.56-1,1.69-1a20.06,20.06,0,0,0,2.82-.14c6.06-.57,8.46-5.22,10.85-11.14L404.57,24c1.55-4.08,2-4.79,3-4.79.7,0,1.26.56,2.82,4.51,2,4.65,21.14,53.85,28.61,71.47,4.65,11.14,8.74,13,10.71,13.67a13.4,13.4,0,0,0,4.8.71c1,0,1.69.28,1.69,1s-.57,1-2.12,1-12,0-21.42-.28c-2.68-.14-3.53-.28-3.53-1,0-.42.43-.84,1-1,.56-.29,1.41-1,.56-3.11L419.51,77.85a1.26,1.26,0,0,0-1.13-.7Zm24-4.94c.56,0,.56-.42.42-.84L406,40.21c-.7-2-.84-2-1.55,0L393.85,71.37c-.28.56,0,.84.28.84Z"
                    style={{ opacity: "0.4" }}
                  />
                  <path
                    fill="#000000"
                    d="M559.47,70.66c0,13.53,0,24.67.7,30.59.43,4.09,1.27,7.19,5.5,7.75a59.78,59.78,0,0,0,6.34.57c.85,0,1.13.42,1.13.84,0,.71-.7,1.13-2.25,1.13-7.76,0-16.64-.42-17.34-.42s-9.59.42-13.82.42c-1.55,0-2.25-.28-2.25-1.13,0-.42.28-.84,1.13-.84a21.18,21.18,0,0,0,4.23-.57c2.81-.56,3.52-3.66,4.08-7.75.71-5.92.71-17.06.71-30.59V11c-6.91.14-14,.14-20.86.28-8.74.14-12.13,1.12-14.38,4.51A24.39,24.39,0,0,0,510,20.2c-.42,1.13-.84,1.41-1.41,1.41-.42,0-.7-.43-.7-1.27,0-1.41,2.82-13.53,3.1-14.66.28-.85.84-2.68,1.41-2.68,1,0,2.39,1.41,6.2,1.69,4.09.42,9.44.71,11.14.71h52.86a56.59,56.59,0,0,0,10-.71c2.11-.28,3.38-.7,3.94-.7.71,0,.71.84.71,1.69,0,4.23-.43,14-.43,15.5,0,1.27-.42,1.84-1,1.84-.71,0-1-.43-1.13-2.4,0-.56-.14-1-.14-1.55-.42-4.23-3.81-7.47-17.34-7.75-5.92-.14-11.84-.14-17.76-.28Z"
                    style={{ opacity: "0.4" }}
                  />
                  <path
                    fill="#000000"
                    d="M689.15,58.68c.42,0,.84,0,.84-.7V55.44c0-18.61,0-21.85-.28-25.66s-.85-5.78-5.5-6.62a27.59,27.59,0,0,0-3.52-.28c-1,0-1.69-.43-1.69-1,0-.85.7-1,2-1,5.92,0,14.24.43,14.8.43s8.46-.43,12.69-.43c1.41,0,2.25.14,2.25,1,0,.42-.42,1-1.55,1a19.38,19.38,0,0,0-2.82.28c-3.8.56-4.37,2.82-4.65,6.76s-.14,7-.14,25.66V76.72c0,11.56,0,20.73.56,25.8.43,3.38,1.13,6.2,4.8,6.62a33.76,33.76,0,0,0,4.93.43c1.13,0,1.83.42,1.83,1,0,.71-.7,1-2.11,1-7,0-15.22-.42-15.93-.42-.56,0-8.74.42-12.55.42-1.41,0-2.11-.28-2.11-1.13,0-.42.42-.84,1.55-.84a12.65,12.65,0,0,0,3.24-.28c2.4-.43,3.1-3.53,3.53-6.77.7-5.07.7-14,.7-25.37V64.6a.81.81,0,0,0-.84-.84H638c-.43,0-.71.14-.71.84V77.15c0,11.41,0,20.58.71,25.65.42,3.1,1.12,5.92,4.79,6.34a37.3,37.3,0,0,0,5.07.43c1,0,1.7.42,1.7,1s-.57,1-1.84,1c-7.19,0-15.5-.42-16.21-.42-.42,0-9,.42-12.68.42-1.41,0-2.26-.28-2.26-1,0-.42.28-1,1.55-1a13.45,13.45,0,0,0,3.38-.43c2.54-.56,3.11-3.24,3.53-6.34.84-5.07.7-14.52.7-26.08V55.86c0-18.61,0-22.27-.28-26.08-.28-3.66-1.27-6.34-5.36-6.76a37.32,37.32,0,0,0-3.8-.29c-1,0-1.55-.42-1.55-.84,0-.85.7-1,2.11-1,6.06,0,12.83.43,14.66.43.57,0,8.74-.43,12.69-.43,1.41,0,2.11.28,2.11,1,0,.56-.56.84-1.41.84a12,12,0,0,0-2.82.29c-3.52.56-4.37,3-4.65,6.9s-.14,6.91-.14,25.52V58c0,.7.42.7.85.7Z"
                    style={{ opacity: "0.4" }}
                  />
                  <path
                    fill="#000000"
                    d="M748.48,55.58c0-18.47,0-21.85-.28-25.66s-1.27-5.92-5.36-6.76a23.4,23.4,0,0,0-3.38-.28c-1,0-1.83-.43-1.83-.85,0-.85.7-1.13,2.11-1.13,2.82,0,6.63.28,14.52.43.7,0,25.79,0,28.61-.15a19.94,19.94,0,0,0,5.5-.7,4.34,4.34,0,0,1,1.55-.42c.28,0,.57.28.57,1,0,.85-.85,2.82-1.13,6.35-.14,2.39-.28,4.65-.42,7.33,0,1.27-.29,2.11-1,2.11s-1-.56-1-1.55a13.59,13.59,0,0,0-1-4.51c-.85-2.82-2.12-3.81-9.17-4.23-1.83-.14-15.79-.28-16.07-.28s-.7.28-.7,1.13v32c0,.84.14,1.41.84,1.41,1.7,0,16.07-.15,19-.43,3.25-.14,5.36-.56,6.49-2.11.56-.85,1-1.13,1.55-1.13.28,0,.56.14.56.85s-.56,3.38-1,7.47c-.43,3.94-.43,6.76-.57,8.6-.14,1.12-.42,1.55-1,1.55-.71,0-.85-.85-.85-1.84a15.94,15.94,0,0,0-.42-3.38c-.57-1.83-1.41-3.81-6.77-4.23-3.24-.28-14.66-.56-16.92-.56-.84,0-1,.42-1,1V76.86c0,4.37-.14,16.78,0,19.18.28,5.21,1,7.89,4,9.16,2.11,1,5.49,1.27,10.29,1.27,2.67,0,7.19.14,10.71-.85,4.23-1.27,5.21-4.09,6.34-9.3.28-1.41.71-2,1.27-2,.85,0,.85,1.27.85,2.12s-1.13,9.87-1.55,12.26c-.57,2.82-1.55,3.1-6.21,3.1-9.3,0-13.25-.28-18.18-.28s-11.42-.42-16.63-.42c-3.25,0-5.93.42-9.31.42-1.27,0-2-.28-2-1,0-.56.56-1,1.27-1a10.3,10.3,0,0,0,2.82-.43c2.53-.56,4.23-2.39,4.51-11.13.14-4.79.28-10.57.28-21.29Z"
                    style={{ opacity: "0.4" }}
                  />
                  <path
                    fill="#000000"
                    d="M813.3,66c0-18.75,14.52-46.8,49.34-46.8,27.91,0,49.19,16.63,49.19,45,0,26.92-19.87,48.91-49.9,48.91C827.4,113.09,813.3,87.44,813.3,66Zm85.28,1.69c0-28.33-17.48-44.12-36.79-44.12-19.59,0-35.38,12.12-35.38,38.77,0,27.62,15.37,45.95,39.05,45.95C874.9,108.3,898.58,103.51,898.58,67.7Z"
                    style={{ opacity: "0.4" }}
                  />
                  <path
                    fill="#000000"
                    d="M935.82,55.58c0-18.61,0-22-.28-25.8s-1.27-5.92-5.64-6.76a23.42,23.42,0,0,0-3.38-.29c-1,0-1.55-.28-1.55-.84s.42-1,1.69-1c6.06,0,14.66.43,14.94.43,1.27,0,10.85-.43,14.8-.43,7.9,0,16.5.71,23.12,5.36A21.38,21.38,0,0,1,988,43.46c0,7.75-3.81,17.62-15,26.64,10.3,12.68,18.75,23.12,25.94,30.59,6.77,6.9,11,8,14.94,8.6,1,.14,4,.28,4.37.28,1.13,0,1.55.42,1.55,1,0,.71-.56,1-2.53,1h-9.87c-6.63,0-9.73-.42-12.83-1.69-5.92-2.54-10.15-8.88-17.48-18.33-5.49-6.76-11.13-14.37-13.53-17.33a2,2,0,0,0-1.69-.85l-14.52-.14c-.56,0-.7.14-.7.7v2c0,11.27,0,21.57.7,26.64.42,3.38.85,6.2,5.5,6.77,1.41.14,3,.28,4.09.28s1.83.42,1.83.84c0,.71-.57,1.13-2,1.13-7.32,0-15.22-.42-15.78-.42-2.26,0-8.46.42-12.27.42-1.41,0-2-.28-2-1.13,0-.42.85-.84,1.69-.84a12.12,12.12,0,0,0,3.1-.28c2.4-.43,3.24-2,3.67-5.36.7-5.08.56-16.63.56-27.21Zm10.86,10a1.76,1.76,0,0,0,.7,1.69c1.83,1,7.47,1.83,12.55,1.83,3,0,6.48-.14,9.44-2.11,4.23-2.68,7-8.88,7-17.9,0-15.37-8.18-23.83-20.72-23.83a37.34,37.34,0,0,0-8.18.71,1.27,1.27,0,0,0-.84,1.27Z"
                    style={{ opacity: "0.4" }}
                  />
                  <path
                    fill="#000000"
                    d="M1045.49,80.81c0-6.76-1-9.3-3.1-13-.84-1.55-17.2-28.19-21.56-34.25-3.81-5.36-5.22-7.05-7.19-8.6a11.27,11.27,0,0,0-6.63-2.11c-.84,0-1.55-.43-1.55-1.13,0-.42.56-.85,1.69-.85,2.26,0,13,.43,13.25.43.85,0,5.5-.43,10.72-.43,1.41,0,1.83.43,1.83.85s-.42.84-1.55,1.13c-2,.42-2.26,1.12-2.26,2.25,0,1.41.85,2.82,1.83,4.65,1.84,3.53,20.44,33.41,22.56,36.93,2.25-4.93,18-30.72,20-34.25,2.68-4.65,3.25-5.92,3.25-7.47,0-1.83-1.69-1.83-3.25-2.11-1.12-.15-1.55-.57-1.55-1.13s.29-.85,1.7-.85c3.38,0,6.34.43,8.6.43,1.83,0,10-.43,12.4-.43,1.27,0,1.69.43,1.69.85,0,.7-.7,1.13-1.69,1.13-3,.14-5.07.42-7,1.83s-3,2.68-5.21,5.78c-8.18,11.27-21.85,34.25-24,39.19-1.69,4.37-1.41,7.47-1.41,11.13V91.1c0,1,0,6.2.29,11.28.28,3.38.56,5.78,4.93,6.62a27,27,0,0,0,5.21.57c1.13,0,1.56.42,1.56.84,0,.71-.43,1.13-1.7,1.13-7,0-15.78-.42-16.21-.42s-8.74.42-12.68.42c-1.41,0-2-.42-2-1.13,0-.42.42-.84,1.41-.84a14.7,14.7,0,0,0,3.53-.43c2.39-.42,3.38-3.38,3.66-6.76.42-5.08.42-10.15.42-11.28Z"
                    style={{ opacity: "0.4" }}
                  />
                </g>
                <path d="M11.14,67c0-50.89.28-32.56.14-59.91,0-5.5.42-7,1.55-7s3.52,3.1,4.93,4.51c2.12,2.4,23.12,25.09,44.83,48.35C76.54,67.8,91.91,85,96.42,89.65L94.87,18c-.14-9.16-1.13-12.26-5.5-13.39A29.49,29.49,0,0,0,83.31,4c-1.55,0-2-.43-2-1,0-.85,1.13-1,2.82-1,6.35,0,13.11.43,14.66.43S105,2,110.8,2c1.55,0,2.53.14,2.53,1,0,.56-.56.85-1.55,1s-2,.28-3.66.56c-4,.85-4.94,3-4.94,12.69l-.28,82.32c0,9.3-.28,10-1.27,10s-2.82-1.55-10.29-9c-1.55-1.41-21.85-22.13-36.79-38.2C38.2,44.69,22.27,26.92,17.76,21.85l1.83,67.52c.29,11.56,1.7,15.22,5.5,16.35a30.69,30.69,0,0,0,7.05.85c.7,0,1.13.28,1.13.84,0,.85-.85,1.13-2.54,1.13-8,0-13.67-.42-14.94-.42s-7.19.42-13.54.42c-1.4,0-2.25-.14-2.25-1.13,0-.56.42-.84,1.13-.84a20.13,20.13,0,0,0,5.78-.85c3.52-1,4.23-5.07,4.23-17.9Z" />
                <path d="M149.55,52.58c0-18.61,0-22-.28-25.8s-1.13-5.92-4.09-6.48c-1.41-.28-2.4-.28-3.25-.42s-1.55-.43-1.55-1c0-.71.57-1,2.12-1,4.37,0,12.4.43,12.83.43s8.74-.43,12.68-.43c1.41,0,2.12.28,2.12,1,0,.56-.42.84-1.55,1-.85.14-1.55.14-2.54.28-4.09.56-4.51,2.68-4.79,6.76-.28,3.81-.14,7-.14,25.66V73.72c0,10.86-.14,20.73.56,25.8.56,4.09,1.13,5.64,4.79,6.48a32.08,32.08,0,0,0,5.36.57c1.27.14,1.55.42,1.55,1s-.56,1-2,1c-7.19,0-15.37-.42-16.07-.42-.43,0-8.74.42-12.69.42-1.27,0-2.26-.28-2.26-1,0-.56.57-1,1.84-1a16.45,16.45,0,0,0,3.38-.43c2.4-.56,2.82-3.38,3.24-6.76.71-5.08.71-15.08.71-25.66Z" />
                <path d="M204.52,22c0-4.37.42-5.78,1.55-5.78S209.45,19,210.44,20C211.71,21.43,231.3,41.44,251,61.6c11,10.71,25.1,25.23,28.76,28.62l-1.55-58.64c-.14-7.62-1-10.15-4.79-11.14a35.68,35.68,0,0,0-5.5-.56c-1.41,0-1.69-.57-1.69-1.13,0-.71,1.13-.85,2.54-.85,6.06,0,12,.43,13.25.43s5.78-.43,11.27-.43c1.55,0,2,.14,2,.85,0,.56-.43,1-1.27,1.13s-2,.14-3.53.42c-3.24.7-4.23,2.11-4.23,10.57L286,101.63c0,7.05-.28,7.76-1.27,7.76s-2.39-1-9.3-7.47c-.56-.29-20.16-19.74-32.42-31.72C228.34,55,214.24,40.32,210.72,36.65l1.83,55.12c.28,9.72,1.13,13.39,4.65,14.23a24.2,24.2,0,0,0,5.78.57c1.13,0,1.69.42,1.69,1,0,.71-.7,1-2.25,1-7.61,0-12.69-.42-13.67-.42s-6.21.42-12.27.42c-1.27,0-2.11-.14-2.11-1,0-.56.56-1,2-1a13.93,13.93,0,0,0,4.37-.57c3.1-1,3.81-4.79,3.81-15.08C204.52,23.68,204.66,45.39,204.52,22Z" />
                <path d="M339.27,79.5c0,20.3.14,28.2-3.81,37.22-2.54,6.06-8.18,11.7-19.17,19-1.55.84-3.67,2.39-4.93,3-.15.14-.43.14-.85.14s-1-.14-1-.71c0-.84.85-1.12,1.84-1.83a17.77,17.77,0,0,0,3.94-3c8.46-8,12.55-14.1,12.55-46.38V52.58c0-18.61,0-21.85-.28-25.66s-1.55-5.78-5.5-6.76a37.81,37.81,0,0,0-4.23-.28c-.42,0-1-.43-1-.85,0-.85.71-1.13,2.12-1.13,5.92,0,14.09.43,14.52.43s8.88-.43,12.82-.43c1.41,0,2,.28,2,1.13a1.06,1.06,0,0,1-.85.85c-.84,0-1.69.14-3.24.28-3.24.7-4.37,2.82-4.65,6.9-.28,3.81-.28,6.91-.28,25.52Z" />
                <path d="M389.72,74.15a1.47,1.47,0,0,0-1.4,1.12l-6.21,17.62c-1.41,4-2.39,7.76-2.39,10,0,2.54,1.55,3.67,4.65,3.67h1c1.26,0,1.69.42,1.69,1,0,.71-1.13,1-2.12,1-3.1,0-9.58-.42-11.13-.42s-7.62.42-13.54.42c-1.55,0-2.25-.28-2.25-1,0-.56.56-1,1.69-1a20.06,20.06,0,0,0,2.82-.14c6.06-.57,8.46-5.22,10.85-11.14L401.57,21c1.55-4.08,2-4.79,3-4.79.7,0,1.26.56,2.82,4.51,2,4.65,21.14,53.85,28.61,71.47,4.65,11.14,8.74,13,10.71,13.67a13.4,13.4,0,0,0,4.8.71c1,0,1.69.28,1.69,1s-.57,1-2.12,1-12,0-21.42-.28c-2.68-.14-3.53-.28-3.53-1,0-.42.43-.84,1-1,.56-.29,1.41-1,.56-3.11L416.51,74.85a1.26,1.26,0,0,0-1.13-.7Zm24-4.94c.56,0,.56-.42.42-.84L403,37.21c-.7-2-.84-2-1.55,0L390.85,68.37c-.28.56,0,.84.28.84Z" />
                <path d="M556.47,67.66c0,13.53,0,24.67.7,30.59.43,4.09,1.27,7.19,5.5,7.75a59.78,59.78,0,0,0,6.34.57c.85,0,1.13.42,1.13.84,0,.71-.7,1.13-2.25,1.13-7.76,0-16.64-.42-17.34-.42s-9.59.42-13.82.42c-1.55,0-2.25-.28-2.25-1.13,0-.42.28-.84,1.13-.84a21.18,21.18,0,0,0,4.23-.57c2.81-.56,3.52-3.66,4.08-7.75.71-5.92.71-17.06.71-30.59V8c-6.91.14-14,.14-20.86.28-8.74.14-12.13,1.12-14.38,4.51A24.39,24.39,0,0,0,507,17.2c-.42,1.13-.84,1.41-1.41,1.41-.42,0-.7-.43-.7-1.27,0-1.41,2.82-13.53,3.1-14.66.28-.85.84-2.68,1.41-2.68,1,0,2.39,1.41,6.2,1.69,4.09.42,9.44.71,11.14.71h52.86a56.59,56.59,0,0,0,10-.71c2.11-.28,3.38-.7,3.94-.7.71,0,.71.84.71,1.69,0,4.23-.43,14-.43,15.5,0,1.27-.42,1.84-1,1.84-.71,0-1-.43-1.13-2.4,0-.56-.14-1-.14-1.55-.42-4.23-3.81-7.47-17.34-7.75-5.92-.14-11.84-.14-17.76-.28Z" />
                <path d="M686.15,55.68c.42,0,.84,0,.84-.7V52.44c0-18.61,0-21.85-.28-25.66s-.85-5.78-5.5-6.62a27.59,27.59,0,0,0-3.52-.28c-1,0-1.69-.43-1.69-1,0-.85.7-1,2-1,5.92,0,14.24.43,14.8.43s8.46-.43,12.69-.43c1.41,0,2.25.14,2.25,1,0,.42-.42,1-1.55,1a19.38,19.38,0,0,0-2.82.28c-3.8.56-4.37,2.82-4.65,6.76s-.14,7-.14,25.66V73.72c0,11.56,0,20.73.56,25.8.43,3.38,1.13,6.2,4.8,6.62a33.76,33.76,0,0,0,4.93.43c1.13,0,1.83.42,1.83,1,0,.71-.7,1-2.11,1-7,0-15.22-.42-15.93-.42-.56,0-8.74.42-12.55.42-1.41,0-2.11-.28-2.11-1.13,0-.42.42-.84,1.55-.84a12.65,12.65,0,0,0,3.24-.28c2.4-.43,3.1-3.53,3.53-6.77.7-5.07.7-14,.7-25.37V61.6a.81.81,0,0,0-.84-.84H635c-.43,0-.71.14-.71.84V74.15c0,11.41,0,20.58.71,25.65.42,3.1,1.12,5.92,4.79,6.34a37.3,37.3,0,0,0,5.07.43c1,0,1.7.42,1.7,1s-.57,1-1.84,1c-7.19,0-15.5-.42-16.21-.42-.42,0-9,.42-12.68.42-1.41,0-2.26-.28-2.26-1,0-.42.28-1,1.55-1a13.45,13.45,0,0,0,3.38-.43c2.54-.56,3.11-3.24,3.53-6.34.84-5.07.7-14.52.7-26.08V52.86c0-18.61,0-22.27-.28-26.08s-1.27-6.34-5.36-6.76a37.32,37.32,0,0,0-3.8-.29c-1,0-1.55-.42-1.55-.84,0-.85.7-1,2.11-1,6.06,0,12.83.43,14.66.43.57,0,8.74-.43,12.69-.43,1.41,0,2.11.28,2.11,1,0,.56-.56.84-1.41.84a12,12,0,0,0-2.82.29c-3.52.56-4.37,3-4.65,6.9s-.14,6.91-.14,25.52V55c0,.7.42.7.85.7Z" />
                <path d="M745.48,52.58c0-18.47,0-21.85-.28-25.66s-1.27-5.92-5.36-6.76a23.4,23.4,0,0,0-3.38-.28c-1,0-1.83-.43-1.83-.85,0-.85.7-1.13,2.11-1.13,2.82,0,6.63.28,14.52.43.7,0,25.79,0,28.61-.15a19.94,19.94,0,0,0,5.5-.7,4.34,4.34,0,0,1,1.55-.42c.28,0,.57.28.57,1,0,.85-.85,2.82-1.13,6.35-.14,2.39-.28,4.65-.42,7.33,0,1.27-.29,2.11-1,2.11s-1-.56-1-1.55a13.59,13.59,0,0,0-1-4.51c-.85-2.82-2.12-3.81-9.17-4.23-1.83-.14-15.79-.28-16.07-.28s-.7.28-.7,1.13v32c0,.84.14,1.41.84,1.41,1.7,0,16.07-.15,19-.43,3.25-.14,5.36-.56,6.49-2.11.56-.85,1-1.13,1.55-1.13.28,0,.56.14.56.85s-.56,3.38-1,7.47c-.43,3.94-.43,6.76-.57,8.6-.14,1.12-.42,1.55-1,1.55-.71,0-.85-.85-.85-1.84a15.94,15.94,0,0,0-.42-3.38c-.57-1.83-1.41-3.81-6.77-4.23-3.24-.28-14.66-.56-16.92-.56-.84,0-1,.42-1,1V73.86c0,4.37-.14,16.78,0,19.18.28,5.21,1,7.89,4,9.16,2.11,1,5.49,1.27,10.29,1.27,2.67,0,7.19.14,10.71-.85,4.23-1.27,5.21-4.09,6.34-9.3.28-1.41.71-2,1.27-2,.85,0,.85,1.27.85,2.12s-1.13,9.87-1.55,12.26c-.57,2.82-1.55,3.1-6.21,3.1-9.3,0-13.25-.28-18.18-.28s-11.42-.42-16.63-.42c-3.25,0-5.93.42-9.31.42-1.27,0-2-.28-2-1,0-.56.56-1,1.27-1a10.3,10.3,0,0,0,2.82-.43c2.53-.56,4.23-2.39,4.51-11.13.14-4.79.28-10.57.28-21.29Z" />
                <path d="M810.3,63c0-18.75,14.52-46.8,49.34-46.8,27.91,0,49.19,16.63,49.19,45,0,26.92-19.87,48.91-49.9,48.91C824.4,110.09,810.3,84.44,810.3,63Zm85.28,1.69c0-28.33-17.48-44.12-36.79-44.12-19.59,0-35.38,12.12-35.38,38.77,0,27.62,15.37,45.95,39.05,45.95C871.9,105.3,895.58,100.51,895.58,64.7Z" />
                <path d="M932.82,52.58c0-18.61,0-22-.28-25.8s-1.27-5.92-5.64-6.76a23.42,23.42,0,0,0-3.38-.29c-1,0-1.55-.28-1.55-.84s.42-1,1.69-1c6.06,0,14.66.43,14.94.43,1.27,0,10.85-.43,14.8-.43,7.9,0,16.5.71,23.12,5.36A21.38,21.38,0,0,1,985,40.46c0,7.75-3.81,17.62-15,26.64,10.3,12.68,18.75,23.12,25.94,30.59,6.77,6.9,11,8,14.94,8.6,1,.14,4,.28,4.37.28,1.13,0,1.55.42,1.55,1,0,.71-.56,1-2.53,1h-9.87c-6.63,0-9.73-.42-12.83-1.69-5.92-2.54-10.15-8.88-17.48-18.33-5.49-6.76-11.13-14.37-13.53-17.33a2,2,0,0,0-1.69-.85l-14.52-.14c-.56,0-.7.14-.7.7v2c0,11.27,0,21.57.7,26.64.42,3.38.85,6.2,5.5,6.77,1.41.14,3,.28,4.09.28s1.83.42,1.83.84c0,.71-.57,1.13-2,1.13-7.32,0-15.22-.42-15.78-.42-2.26,0-8.46.42-12.27.42-1.41,0-2-.28-2-1.13,0-.42.85-.84,1.69-.84a12.12,12.12,0,0,0,3.1-.28c2.4-.43,3.24-2,3.67-5.36.7-5.08.56-16.63.56-27.21Zm10.86,10a1.76,1.76,0,0,0,.7,1.69c1.83,1,7.47,1.83,12.55,1.83,3,0,6.48-.14,9.44-2.11,4.23-2.68,7-8.88,7-17.9,0-15.37-8.18-23.83-20.72-23.83a37.34,37.34,0,0,0-8.18.71,1.27,1.27,0,0,0-.84,1.27Z" />
                <path d="M1042.49,77.81c0-6.76-1-9.3-3.1-13-.84-1.55-17.2-28.19-21.56-34.25-3.81-5.36-5.22-7-7.19-8.6a11.27,11.27,0,0,0-6.63-2.11c-.84,0-1.55-.43-1.55-1.13,0-.42.56-.85,1.69-.85,2.26,0,13,.43,13.25.43.85,0,5.5-.43,10.72-.43,1.41,0,1.83.43,1.83.85s-.42.84-1.55,1.13c-2,.42-2.26,1.12-2.26,2.25,0,1.41.85,2.82,1.83,4.65,1.84,3.53,20.44,33.41,22.56,36.93,2.25-4.93,18-30.72,20-34.25,2.68-4.65,3.25-5.92,3.25-7.47,0-1.83-1.69-1.83-3.25-2.11-1.12-.15-1.55-.57-1.55-1.13s.29-.85,1.7-.85c3.38,0,6.34.43,8.6.43,1.83,0,10-.43,12.4-.43,1.27,0,1.69.43,1.69.85,0,.7-.7,1.13-1.69,1.13-3,.14-5.07.42-7,1.83s-3,2.68-5.21,5.78c-8.18,11.27-21.85,34.25-24,39.19-1.69,4.37-1.41,7.47-1.41,11.13V88.1c0,1,0,6.2.29,11.28.28,3.38.56,5.78,4.93,6.62a27,27,0,0,0,5.21.57c1.13,0,1.56.42,1.56.84,0,.71-.43,1.13-1.7,1.13-7,0-15.78-.42-16.21-.42s-8.74.42-12.68.42c-1.41,0-2-.42-2-1.13,0-.42.42-.84,1.41-.84a14.7,14.7,0,0,0,3.53-.43c2.39-.42,3.38-3.38,3.66-6.76.42-5.08.42-10.15.42-11.28Z" />
              </svg>
            </Link>
            <div className="w-full lg:w-1/4">
              <div className="flex justify-center lg:justify-start pt-3 pb-10">
                <div>
                  <h4 className="font-roboto font-black uppercase text-14 text-ninja-theory mb-8 hidden md:block text-center lg:text-left">
                    Social
                  </h4>
                  <ul className="flex flex-wrap justify-start">
                    <li className="my-1 mr-3">
                      <a
                        href="https://www.instagram.com/officialninjatheory"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Follow Ninja Theory on Instagram"
                        className="no-focus s-item w-45 h-45 transition-opacity duration-150 hover:opacity-50 border border-solid rounded-full flex justify-center align-center"
                      >
                        <span tabIndex={-1} className="kb-focus flex">
                          <img
                            src="https://ninjatheory.azureedge.net/site/site/assets/instagram_8c291bc4b0.svg"
                            alt="Follow us on Instagram"
                            className="lazy-load-transition lazy-load-transition-loaded block w-15 lazy-load"
                          />
                        </span>
                      </a>
                    </li>
                    <li className="my-1 mr-3">
                      <a
                        href="https://www.facebook.com/ninjatheory"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Follow Ninja Theory on Facebook"
                        className="no-focus s-item w-45 h-45 transition-opacity duration-150 hover:opacity-50 border border-solid rounded-full flex justify-center align-center"
                      >
                        <span tabIndex={-1} className="kb-focus flex">
                          <img
                            src="https://ninjatheory.azureedge.net/site/site/assets/iconmonstr_facebook_1_72a2dc2354_19497d1d73.svg"
                            alt="Follow us on Facebook"
                            className="lazy-load-transition lazy-load-transition-loaded block w-15 lazy-load"
                          />
                        </span>
                      </a>
                    </li>
                    <li className="my-1 mr-3">
                      <a
                        href="https://twitter.com/NinjaTheory"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Follow Ninja Theory on Twitter"
                        className="no-focus s-item w-45 h-45 transition-opacity duration-150 hover:opacity-50 border border-solid rounded-full flex justify-center align-center"
                      >
                        <span tabIndex={-1} className="kb-focus flex">
                          <img
                            src="https://ninjatheory.azureedge.net/site/site/assets/iconmonstr_twitter_1_eaceb25d32_c674152378.svg"
                            alt="Follow us on Twitter"
                            className="lazy-load-transition lazy-load-transition-loaded block w-15 lazy-load"
                          />
                        </span>
                      </a>
                    </li>
                    <li className="my-1">
                      <a
                        href="https://www.youtube.com/channel/UCPe-Z0xVV3aFyCtU-3PE-Bw"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Follow Ninja Theory on YouTube"
                        className="no-focus s-item w-45 h-45 transition-opacity duration-150 hover:opacity-50 border border-solid rounded-full flex justify-center align-center"
                      >
                        <span tabIndex={-1} className="kb-focus flex">
                          <img
                            src="https://ninjatheory.azureedge.net/site/site/assets/iconmonstr_youtube_6_eb8204ef39_db02a30de4.svg"
                            alt="Follow us on YouTube"
                            className="lazy-load-transition lazy-load-transition-loaded block w-15 lazy-load"
                          />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-3/4">
              <nav
                id="footer-navigation"
                aria-label="footer navigation"
                className="border-t border-b hidden md:block border-opacity-0 border-transparent"
              >
                <ul className="md:flex justify-center lg:justify-between items-center flex-wrap px-20-px md:px-0  ">
                  <li className="py-2 md:py-3 md:mr-3">
                    <a
                      href="https://go.microsoft.com/fwlink/?LinkId=521839"
                      className="text-white font-roboto md:font-black uppercase text-14 block no-focus text-center md:text-left transition-opacity hover:opacity-50 duration-150"
                    >
                      <span tabIndex={-1} className="kb-focus flex">

                        Privacy and Cookies
                      </span>
                    </a>
                  </li>
                  <li className="py-2 md:py-3 md:mr-3">
                    <a
                      href="https://www.microsoft.com/trademarks"
                      className="text-white font-roboto md:font-black uppercase text-14 block no-focus text-center md:text-left transition-opacity hover:opacity-50 duration-150"
                    >
                      <span tabIndex={-1} className="kb-focus flex">

                        Trademarks
                      </span>
                    </a>
                  </li>
                  <li className="py-2 md:py-3 md:mr-3">
                    <a
                      href="https://www.microsoft.com/servicesagreement/"
                      className="text-white font-roboto md:font-black uppercase text-14 block no-focus text-center md:text-left transition-opacity hover:opacity-50 duration-150"
                    >
                      <span tabIndex={-1} className="kb-focus flex">

                        Terms of Use
                      </span>
                    </a>
                  </li>
                  <li className="py-2 md:py-3 md:mr-3">
                    <a
                      href="https://www.xbox.com/en-US/Legal/CodeOfConduct"
                      className="text-white font-roboto md:font-black uppercase text-14 block no-focus text-center md:text-left transition-opacity hover:opacity-50 duration-150"
                    >
                      <span tabIndex={-1} className="kb-focus flex">

                        Code of Conduct
                      </span>
                    </a>
                  </li>
                  <li className="py-2 md:py-3 md:mr-3">
                    <a
                      href="/candidate-privacy-policy"
                      className="text-white font-roboto md:font-black uppercase text-14 block no-focus text-center md:text-left transition-opacity hover:opacity-50 duration-150"
                    >
                      <span tabIndex={-1} className="kb-focus flex">

                        Candidate Privacy Policy
                      </span>
                    </a>
                  </li>
                  <li className="py-2 md:py-3 md:mr-3">
                    <a
                      href="/dmca-policy"
                      className="text-white font-roboto md:font-black uppercase text-14 block no-focus text-center md:text-left transition-opacity hover:opacity-50 duration-150"
                    >
                      <span tabIndex={-1} className="kb-focus flex">

                        DMCA Policy
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about/#"
                      className="text-white font-roboto md:font-black uppercase text-14 block no-focus text-center md:text-left transition-opacity hover:opacity-50 duration-150"
                    >
                      <span tabIndex={-1} className="kb-focus flex">

                        Manage Cookies
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="font-roboto text-center lg:text-left text-12 text-nt-grey-medium md:text-14 footer-copy lg:max-w-80">
                <p>© Copyright 2021 Ninja Theory Ltd.</p>
                <p>
                  This website is owned and operated by Ninja Theory Limited, a
                  company registered in England (Company Registration number 05240956)
                  whose registered office is at The Broadgate Tower Third Floor, 20
                  Primrose Street, London, United Kingdom, EC2A 2RS
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>) : <></> }
    </>
  );
}

export default Footer;