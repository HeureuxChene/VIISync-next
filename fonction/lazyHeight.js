const lazyHeight = target => {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            entries[0].target.style.height = '100%';
        }
        else {
            entries[0].target.style.height = '0%';
        }
    }, { threshold: 0 });
    observer.observe(target);
}

export default lazyHeight