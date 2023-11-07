import { useState, useEffect } from 'react';

// Define a custom hook to handle media queries
function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        // Initial check
        setMatches(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setMatches(event.matches);
        };

        // Add a listener to handle changes in the media query
        mediaQuery.addListener(handleMediaQueryChange);

        // Cleanup the listener when the component unmounts
        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, [query]);

    return matches;
}

export default useMediaQuery;
