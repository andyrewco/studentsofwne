<script>
  import { onMount } from "svelte";

  // variables
  let signatures;

  // on mount
  onMount(async () => {
      await fetch(`http://backend/`)
        .then(r => r.json())
        .then(data => {
          signatures = data;
        });
    })
  
  // stringify
  signatures = JSON.stringify(signatures);
</script>

<main>
	<h1>Students of WNE</h1>
  <p> {signatures} </p>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
