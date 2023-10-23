import styled from "styled-components";

export const Hero = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url('/assets/hero-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 64px;
    text-align: center;
  }

  p {
    font-size: 24px;
  }

  .scroll-down-arrow {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2hldnJvbl90aGluX2Rvd24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiBmaWxsPSJ3aGl0ZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTE3LjQxOCw2LjEwOWMwLjI3Mi0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwYzAuMjcsMC4yNjgsMC4yNzEsMC43MDEsMCwwLjk2OWwtNy45MDgsNy44M2MtMC4yNywwLjI2OC0wLjcwNywwLjI2OC0wLjk3OSwwbC03LjkwOC03LjgzYy0wLjI3LTAuMjY4LTAuMjctMC43MDEsMC0wLjk2OWMwLjI3MS0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwTDEwLDEzLjI1TDE3LjQxOCw2LjEwOXoiLz48L3N2Zz4=);
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 100;
    height: 60px;
    width: 80px;
    left: 50%;
    margin-left: -40px;
    bottom: 10%;
  
    -webkit-animation: fade_move_down 2s ease-in-out infinite;
    -moz-animation:    fade_move_down 2s ease-in-out infinite;
    animation:         fade_move_down 2s ease-in-out infinite;
  
    /*animated scroll arrow animation*/
    @-webkit-keyframes fade_move_down {
      0%   { -webkit-transform:translate(0,-20px); opacity: 0;  }
      50%  { opacity: 1;  }
      100% { -webkit-transform:translate(0,20px); opacity: 0; }
    }
    @-moz-keyframes fade_move_down {
      0%   { -moz-transform:translate(0,-20px); opacity: 0;  }
      50%  { opacity: 1;  }
      100% { -moz-transform:translate(0,20px); opacity: 0; }
    }
    @keyframes fade_move_down {
      0%   { transform:translate(0,-20px); opacity: 0;  }
      50%  { opacity: 1;  }
      100% { transform:translate(0,20px); opacity: 0; }
    }
  }  
`

export const GridCardProducts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 32px;
`

export const ImagePlaceWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`