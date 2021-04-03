<script>
  async function getSampleData() {
    const res = await fetch(`http://localhost:8080/api/signatures`);
    const data = res.json();

    if (res.ok) {
      return data;
    } else {
      throw new Error("Didn't work");
    }
  }

  let promise = getSampleData();
</script>

<main>
	<h1>Students of WNE</h1>
  {#await promise}
    <p> ...waiting </p>
  {:then value}
    <p> {value?.msg} </p>
  {/await}

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
