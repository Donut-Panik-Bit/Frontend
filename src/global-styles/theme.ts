export const theme = {
    palette: {
      white: '#ffffff',
      black: '#000000',
      main: '#FAA419',
      gray: '#D4D7DF',
      grayLight: '#EAEAEA',
      grayDark: '#595D67',
      main_text: '#2E2F33',
      sub_text: '#595D67',
      sub_sub_text: '#82858D',
      border_color: '#DDE2E5',
      menu_color: '#F8F9FA'
    },
    fontFamily: {
      roboto: 'Roboto',
      montserrat: 'Montserrat',
      pt: 'PT Root UI'
    },
    transition: {
      hover: 200,
      slide: 300,
      blink: 500,
      spin: 700
    },
    typography: {
      // H0 - H9
      h0: {
        fontSize: '60px',
        lineHeight: '70px',
        fontWeight: '600'
      },
      h1: {
        fontSize: '42px',
        lineHeight: '54px',
        fontWeight: '600'
      },
      h2: {
        fontSize: '42px',
        lineHeight: '54px',
        fontWeight: '300'
      },
      h3: {
        fontSize: '40px',
        lineHeight: '48px',
        fontWeight: '600'
      },
      h4: {
        fontSize: '38px',
        lineHeight: '46px',
        fontWeight: '700'
      },
      h5: {
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: '400'
      },
      h6: {
        fontSize: '32px',
        lineHeight: '48px',
        fontWeight: '600'
      },
      h7: {
        fontSize: '32px',
        lineHeight: '48px',
        fontWeight: '300'
      },
      h8: {
        fontSize: '24px',
        lineHeight: '28px',
        fontWeight: '600'
      },
      h9: {
        fontSize: '24px',
        lineHeight: '28px',
        fontWeight: '400'
      },
      // T0 - T8
      t0: {
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: '400'
      },
      t1: {
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: '300'
      },
      t2: {
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: '400'
      },
      t3: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: '600'
      },
      t4: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: '400'
      },
      t5: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '400'
      },
      t6: {
        fontSize: '16px',
        lineHeight: '22px',
        fontWeight: '300'
      },
      t7: {
        fontSize: '14px',
        lineHeight: '24px',
        fontWeight: '400'
      },
      t8: {
        fontSize: '14px',
        lineHeight: '24px',
        fontWeight: '300'
      },
      t9: {
        fontSize: '10px',
        lineHeight: '16px',
        fontWeight: '300'
      },
      height1: {
        height: '116px',
      }
    }
  }
  export type Theme = typeof theme