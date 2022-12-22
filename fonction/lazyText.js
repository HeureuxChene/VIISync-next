const lazyText = target => {
    const observer = new IntersectionObserver((entries, observe) => {
        if (entries[0].isIntersecting) {
            entries[0].target.classList.add('lazyTextVisible')
        }
        else {
            entries[0].target.classList.remove('lazyTextVisible')
        }
    }, { threshold: 0 });
    observer.observe(target);
}

export default lazyText