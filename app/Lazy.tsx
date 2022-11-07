const Lazy = async () => {
    const data = await fetch('https://api.kickass.website/me', {
        next: {
            revalidate: 0 // simulate dynamic to trigger Suspense each time
        }
    }).then(res => res.json())

    await new Promise(resolve => setTimeout(resolve, 3000)) // add a little latency for testing purposes

    return <div>Lazy {data.username}</div>
}

export default Lazy
