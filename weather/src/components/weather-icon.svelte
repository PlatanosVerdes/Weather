<script>
	/* No se exporta si no que es un paso por parametro con dichos nombres de variables */
	export let conditionIcon;
	export let conditionText;

    /* O tambien se pueden pasar objetos
    export let weather */
</script>

<img src={conditionIcon} alt={conditionText} />

<style>
	img {
        width: 100px;
        height: auto;
        margin: 0 auto;
	}
</style>
