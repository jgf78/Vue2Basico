Vue.component('articulos', {
	template:`
		<div class="componente-articulos">
			<h1> COMPONENTE {{titulo}}</h1>
			<ol v-if="posts">
				<li v-for="(post, index) in posts">{{post.title}}</li>
			</ol>
			<span v-else>Cargando listado por Ajax...</span>
		</div>
	`,
	mounted(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((respuesta) =>{
			//console.log(respuesta.data) pinta el valor en consola
			this.posts = respuesta.data;
		});
	},
	data(){
		return {
			titulo: 'articulos del componente',
			posts: null,
		}
	}
});

Vue.component('fruits', {
	props: ['objeto']
	
});
Vue.component('padre', {
	template: `
		<div> 
			<h1> Componente padre</h1>
			<div>
				<hijo></hijo>
			</div>
		</div
	`
});
Vue.component('hijo', {
	template: `
		<p style="background: yellow;"> Soy el componente hijo</p>
	`
});

Vue.filter('mayusculas', (value)=> value.toUpperCase());
//alert("holaaaaa");
new Vue({
	el: 'main',
	mounted(){//es el metodo que se ejecuta al principio de todo
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((respuesta) =>{
			//console.log(respuesta.data) pinta el valor en consola
			this.posts = respuesta.data;
		});
	},
	data: {
		elegido: 'padre',
		posts: null,
		texto: 'Hola mundo desde VUE2',
		nombre: 'Julián',
		apellido: 'Gómez',
		nota: 2,
		peliculas: ['pelicula 1', 'pelicula 2', 'pelicula 3', 'pelicula 4'],
		frutas: [
			{nombre: 'Manzana', temporada: 'Invierno', precio: 'Bajo'},
			{nombre: 'Naranja', temporada: 'Otoño', precio: 'Medio'},
			{nombre: 'Cereza', temporada: 'Primavera', precio: 'Alto'},
			{nombre: 'Sandia', temporada: 'Verano', precio: 'Medio'}
		],
		superfruta: {nombre: 'Mandarina', temporada: 'Verano', precio: 'Medio'},
		peliculaNueva: null,
		busqueda: '',
		confirmado: null
	},
	methods: {
		crearPelicula(){
			//alert(this.peliculaNueva);
			this.peliculas.unshift(this.peliculaNueva);
			this.peliculaNueva = null;
		},
		borrarPelicula(indice){
			alert("metodo borrar pelicula con indice: "+(indice+1));
			//1 es para que borre solo un elemento 
			this.peliculas.splice(indice, 1);
		},
		marcar(indice){
			this.confirmado = indice;
		}
	},
	computed: {
		nombreYapellidos(){
			var date = new Date();
			var year = date.getFullYear();
			var mes = (date.getMonth()+1);//+1 porque el mes empieza desde 0
			return this.nombre+" "+this.apellido+" - Nota: "+this.nota+" - Año: "+year+" - Mes: "+mes;
		},
		peliculasOrdenadas(){
			return this.peliculas.sort();
		},
		buscarFruta(){
			return this.frutas.filter((fruta) => fruta.nombre.includes(this.busqueda));
		},
		devolverRadio(){
			return radio2;
		}
	}

});

const vue2 = new Vue({
	el: '#app',
	data:{
		texto:'Segunda instancia'
	}
});

const vue3 = new Vue({
	el: '#tercera',
	data:{
		texto:'Tercera instancia',
		prueba: 'prueba'
	}
});