export const ghostAnimation = () => {
  const $ghostElements = [...document.querySelectorAll(".ghost")];
  if (!$ghostElements.length) return;

  const skeletonId = "skeleton-ghost"

  $ghostElements.forEach(($ghost, i) => {
    const $skeletonGhost = document.createElement("div")
    $skeletonGhost.style.width = $ghost.offsetWidth + 'px'
    $skeletonGhost.style.height = $ghost.offsetHeight + 'px'
    $skeletonGhost.classList.add(skeletonId)
    $skeletonGhost.style.opacity = '0'
    $skeletonGhost.setAttribute("data-index", `${i}`)

    $ghost.parentElement.appendChild($skeletonGhost)
    $ghost.style.display = 'none'
    if (!$ghost.classList.contains("animate-delay")) {
      $ghost.classList.add("animate-delay-[.1s]")
    }
    $ghost.classList.add("animate-duration-[.75s]")
  })

  const $skeletonGhosts = [...document.querySelectorAll(`.${skeletonId}`)];

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(({ isIntersecting, target }) => {
      const $skeletonGhost = target
      const skeletonGhostIndex = $skeletonGhost.getAttribute("data-index")

      if (isIntersecting) {
        $skeletonGhost.style.position = 'absolute';
        $skeletonGhost.style.zIndex = '-9999';
        $ghostElements[skeletonGhostIndex].style.display = 'block'
      } else {
        if ($skeletonGhost.getBoundingClientRect().top > 0) {
          $skeletonGhost.style.position = 'relative';
          $ghostElements[skeletonGhostIndex].style.display = 'none'
        }
      }
    })
  }, {
    threshold: 1
  })

  $skeletonGhosts.forEach(el => {
    observer.observe(el)
  })
}