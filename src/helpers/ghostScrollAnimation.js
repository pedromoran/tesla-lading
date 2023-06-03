export const ghostScrollAnimation = () => {
  const $ghosts = [...document.querySelectorAll(".ghost")];
  if (!$ghosts.length) return;

  const skeletonId = "skeleton-ghost"

  $ghosts.forEach(($ghost, i) => {
    const $skeleton = document.createElement("div")
    $skeleton.style.width = $ghost.offsetWidth + 'px'
    $skeleton.style.height = $ghost.offsetHeight + 'px'
    $skeleton.classList.add(skeletonId)
    $skeleton.style.opacity = '0'
    $skeleton.setAttribute("data-index", `${i}`)

    //* add skeleton ghost before ghost element
    $ghost.parentElement.insertBefore($skeleton, $ghost)
    $ghost.style.display = 'none'
    if (!$ghost.classList.contains("animate-delay")) {
      $ghost.classList.add("animate-delay-[.1s]")
    }
    $ghost.classList.add("animate-duration-[.75s]")
  })

  const $skeletons = [...document.querySelectorAll(`.${skeletonId}`)];

  const observerScrollInSkeleton = new IntersectionObserver((entries, observer) => {
    entries.forEach(({ isIntersecting, target }) => {
      const $skeleton = target
      const skeletonIndex = $skeleton.getAttribute("data-index")

      if (isIntersecting) {
        $skeleton.style.position = 'absolute';
        $skeleton.style.zIndex = '-9999';
        $ghosts[skeletonIndex].style.display = 'block'
      }
    })
  }, {
    threshold: 0.5
  })

  const observerScrollOutOfSkeleton = new IntersectionObserver((entries, observer) => {
    entries.forEach(({ isIntersecting, target }) => {
      const $skeleton = target
      const skeletonIndex = $skeleton.getAttribute("data-index")

      if (!isIntersecting) {
        if ($skeleton.getBoundingClientRect().top > $skeleton.clientHeight) {
          $skeleton.style.position = 'relative';
          $ghosts[skeletonIndex].style.display = 'none'
        }
      }
    })
  })

  $skeletons.forEach(el => {
    observerScrollInSkeleton.observe(el)
  })
  $skeletons.forEach(el => {
    observerScrollOutOfSkeleton.observe(el)
  })
}