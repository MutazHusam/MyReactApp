import {
  TestimonialsContainer,
  TestimonialsImgContainer,
  TestimonialsItem,
} from "./style";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper" >
        <TestimonialsContainer>
          <SwiperSlide>
            <TestimonialsItem>
              <TestimonialsImgContainer>
                <img src={AVTR1} alt="AVTR1" />
              </TestimonialsImgContainer>
              <h5>Mutaz Husam</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eos voluptatem eius dolorem maiores nihil ducimus at rem ullam
                reprehenderit quidem quia deserunt, molestiae, eligendi amet
                repel Iat molestias quos totam.
              </small>
            </TestimonialsItem>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsItem>
              <TestimonialsImgContainer>
                <img src={AVTR2} alt="AVTR1" />
              </TestimonialsImgContainer>

              <h5>Mutaz Husam</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eos voluptatem eius dolorem maiores nihil ducimus at rem ullam
                reprehenderit quidem quia deserunt, molestiae, eligendi amet
                repel Iat molestias quos totam.
              </small>
            </TestimonialsItem>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsItem>
              <TestimonialsImgContainer>
                <img src={AVTR3} alt="AVTR1" />
              </TestimonialsImgContainer>

              <h5>Mutaz Husam</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eos voluptatem eius dolorem maiores nihil ducimus at rem ullam
                reprehenderit quidem quia deserunt, molestiae, eligendi amet
                repel Iat molestias quos totam.
              </small>
            </TestimonialsItem>
          </SwiperSlide>


          <SwiperSlide>
            <TestimonialsItem>
              <TestimonialsImgContainer>
                <img src={AVTR4} alt="AVTR1" />
              </TestimonialsImgContainer>

              <h5>Mutaz Husam</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eos voluptatem eius dolorem maiores nihil ducimus at rem ullam
                reprehenderit quidem quia deserunt, molestiae, eligendi amet
                repel Iat molestias quos totam.
              </small>
            </TestimonialsItem>
          </SwiperSlide>

        </TestimonialsContainer>
      </Swiper>
    </section>
  );
};

export default Testimonials;
