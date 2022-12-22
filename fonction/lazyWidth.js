const lazyWidth = target => {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            entries[0].target.style.width = '100%';
        }
        else {
            entries[0].target.style.width = '0%';
        }
    }, { threshold: 0 });
    observer.observe(target);
}

export default lazyWidth