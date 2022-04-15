import React, { useRef } from 'react';
import img1 from '../../assets/schoolImages/1.jpg';
import img2 from '../../assets/schoolImages/2.jpg';
import img3 from '../../assets/schoolImages/3.jpg';
const Slider = () => {
	const sliderShow = useRef(null);
	const next = () => {
		if (sliderShow.current.children.length > 0) {
			// Obtenemos el primer elemento del sliderShow.
			const primerElemento = sliderShow.current.children[0];

			// Establecemos la transicion para el sliderShow.
			sliderShow.current.style.transition = `5000ms ease-out all`;

			const tamañoSlide = sliderShow.current.children[0].offsetWidth;

			// Movemos el sliderShow
			sliderShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				// Reiniciamos la posicion del Slideshow.
				sliderShow.current.style.transition = 'none';
				sliderShow.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final.
				sliderShow.current.appendChild(primerElemento);

				sliderShow.current.removeEventListener('transitionend', transicion);
			};

			// Eventlistener para cuando termina la animacion.
			sliderShow.current.addEventListener('transitionend', transicion);
		}
	};

	const prev = () => {
		if (sliderShow.current.children.length > 0) {
			// Obtenemos el ultimo elemento del sliderShow.
			const index = sliderShow.current.children.length - 1;
			const ultimoElemento = sliderShow.current.children[index];
			sliderShow.current.insertBefore(
				ultimoElemento,
				sliderShow.current.firstChild
			);

			sliderShow.current.style.transition = 'none';
			const tamañoSlide = sliderShow.current.children[0].offsetWidth;
			sliderShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			setTimeout(() => {
				sliderShow.current.style.transition = `5000ms ease-out all`;
				sliderShow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	};

	return (
		<section className='mainContainer'>
			<div className='contenedorPrincipal'>
				{/* contendor sliders */}
				<div className='contenedorSlider' ref={sliderShow}>
					{/*  slide 1 */}
					<div className='slide'>
						<img className='sliderImage' src={img1} alt='' />
						<div className='textSlider'>
							<p>Texto imagen</p>
						</div>
					</div>

					{/*  slide 2 */}
					<div className='slide'>
						<img className='sliderImage' src={img2} alt='' />
						<div className='textSlider'>
							<p>Texto imagen</p>
						</div>
					</div>

					{/*  slide 3 */}
					<div className='slide'>
						<img className='sliderImage' src={img3} alt='' />
						<div className='textSlider'>
							<p>Texto imagen</p>
						</div>
					</div>
				</div>

				<div>
					<button onClick={prev}>Izquierda</button>
					<button onClick={next}>derecha</button>
				</div>
			</div>
		</section>
	);
};

export default Slider;
