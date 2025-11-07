import { definePreset, palette } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const nswlPalette = palette('#c6161d')

const nswlTheme = definePreset(Aura, {
  semantic: {
    primary: nswlPalette,
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{stone.100}',
          100: '{stone.200}',
          200: '{stone.200}',
          300: '{stone.300}',
          400: '{stone.400}',
          500: '{stone.500}',
          600: '{stone.600}',
          700: '{stone.700}',
          800: '{stone.800}',
          900: '{stone.900}',
          950: '{stone.950}',
        },
        text: {
          color: '{surface.800}',
          hoverColor: '{surface.950}',
          mutedColor: '{surface.500}',
          hoverMutedColor: '{surface.600}',
        },
        formField: {
          placeholderColor: '{surface.500}',
        },
        navigation: {
          item: {
            focusBackground: '{gray.200}',
          },
        },
        content: {
          border: {
            color: '{surface.300}',
          },
        },
      },
      focusRing: {
        width: '2px',
      },
    },
  },
  components: {
    accordion: {
      colorScheme: {
        light: {
          header: {
            color: '{text.color}',
            hoverColor: '{primary.color}',
            activeHoverColor: '{primary.color}',
            toggleIcon: {
              color: '{primary.color}',
              hoverColor: '{primary.color}',
              activeColor: '{primary.color}',
              activeHoverColor: '{primary.color}',
            },
          },
        },
      },
    },
    breadcrumb: {
      item: {
        color: '{surface.700}',
      },
    },
    button: {
      colorScheme: {
        light: {
          root: {
            secondary: {
              activeBackground: 'white',
              hoverBackground: 'white',
              focusRing: { color: 'white' },
            },
          },
          text: {
            secondary: {
              color: 'white',
            },
          },
        },
      },
      css: `
        .p-button-text.p-button-secondary:not(:disabled):is(:hover, :active) {
          color: var(--p-text-color);
        }
        .p-button:disabled {
          cursor: not-allowed;
        }
      `,
    },
    card: {
      colorScheme: {
        light: {
          subtitle: {
            color: '{card.color}',
          },
        },
      },
    },
    checkbox: {
      colorScheme: {
        light: {
          root: {
            borderColor: '{stone.400}',
            hoverBorderColor: '{primary.600}',
          },
        },
      },
    },
    chip: {
      root: {
        paddingX: '1rem',
        borderRadius: '99rem',
      },
    },
    datatable: {
      header: {
        borderWidth: '0',
      },
    },
    dialog: {
      root: {
        background: '{surface.50}',
        borderColor: 'transparent',
      },
      header: {
        padding: '.875rem 1.5rem',
      },
      content: {
        padding: '1rem 1.5rem',
      },
      footer: {
        padding: '1rem 1.5rem',
      },
      css: `
        .p-dialog {
          border: none;
          width: 32rem;
          max-width: 90%;
        }
        .p-dialog-header {
          color: white;
          background: var(--p-primary-500);
          border-top-left-radius: var(--p-dialog-border-radius);
          border-top-right-radius: var(--p-dialog-border-radius);
        }
        .p-dialog-header .p-dialog-close-button {
          --p-button-text-secondary-color: white;
          --p-button-text-secondary-hover-background: white;
          --p-button-text-secondary-active-background: var(--p-yellow-100);
        }
        .p-dialog-header .p-dialog-close-button:hover {
          --p-button-text-secondary-color: var(--p-primary-500);
        }
      `,
    },
    drawer: {
      header: {
        padding: '.75rem',
      },
      css: `.p-drawer-header {justify-content:flex-end}`,
    },
    inputtext: {
      root: {
        disabledColor: '#6D665F',
      },
      css: `
        .p-inputtext[readonly] {
          opacity: 1;
          background: var(--p-inputtext-disabled-background);
          color: var(--p-inputtext-disabled-color);
        }
      `,
    },
    menu: {
      list: {
        padding: '.5rem',
      },
      item: {
        focusBackground: '{yellow.300}',
        icon: {
          color: 'inherit',
          focusColor: 'inherit',
        },
        padding: '.75rem 1rem',
      },
      css: `.p-menu {min-width: 0}`,
    },
    message: {
      colorScheme: {
        light: {
          warn: {
            color: '{yellow.700}',
          },
        },
      },
    },
    navigation: {
      item: {
        iconColor: '{yellow.500}',
        focusBackground: '{gray.200}',
      },
    },
    paginator: {
      navButton: {
        selectedColor: 'white',
        selectedBackground: '{primary.color}',
        hoverBackground: '{surface.200}',
      },
    },
    progressspinner: {
      colorScheme: {
        light: {
          root: {
            colorOne: '{primary.color}',
            colorTwo: '{primary.color}',
            colorThree: '{primary.color}',
            colorFour: '{primary.color}',
          },
        },
      },
    },
    select: {
      colorScheme: {
        light: {
          option: {
            selectedBackground: '{red.100}',
            selectedFocusBackground: '{primary.100}',
          },
        },
      },
    },
    tabs: {
      activeBar: {
        height: '3px',
        bottom: '-2px',
      },
      tab: {
        padding: '.75rem 1.75rem',
      },
      tabpanel: {
        padding: '1.25rem 1rem',
      },
      colorScheme: {
        light: {
          tablist: {
            background: 'transparent',
          },
          tab: {
            activeBorderColor: 'var(--p-tabs-tablist-border-color)',
            color: '{text.color}',
            hoverColor: '{primary.color}',
            activeColor: '{primary.color}',
          },
        },
      },
    },
    togglebutton: {
      colorScheme: {
        light: {
          root: {
            color: '{text.color}',
            // hoverColor: 'white',
            checkedColor: 'white',
            background: 'transparent',
            hoverBackground: '{surface.200}',
            padding: '0',
            borderRadius: '.375rem',
          },
          content: {
            checkedShadow: 'none',
            checkedBackground: '{primary.color}',
            padding: '.375rem',
          },
        },
      },
    },
  },
})

export default {
  theme: {
    preset: nswlTheme,
    options: {
      darkModeSelector: false,
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities',
      },
    },
  },
  pt: {
    message: {
      root: {
        role: 'status',
        ariaLive: 'polite',
      },
    },
  },
}
