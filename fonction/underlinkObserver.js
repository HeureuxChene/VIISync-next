const underlinkObserver = (target, setPosition) => {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            setPosition(parseInt(entries[0].target.id))
        }
    }, { threshold: 0 });
    observer.observe(target);
}

export default underlinkObserver