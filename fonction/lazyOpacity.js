const lazyOpacity = target => {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            entries[0].target.style.opacity = '1';
        }
        else {
            entries[0].target.style.opacity = '0';
        }
    }, { threshold: 0 });
    observer.observe(target);
}

export default lazyOpacity