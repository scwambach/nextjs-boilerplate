import Axios from 'axios';
import Swal from 'sweetalert2';
import { FaRocket } from 'react-icons/lib/fa';
import { netlifyBuildHook } from '../dashboardConfig';

export function DeployAction() {
  return {
    icon: FaRocket,
    label: `Publish Website`,
    onHandle: () => {
      const thisPage = window.location.href;
      Swal.fire({
        icon: 'question',
        title: 'Hold Up!',
        text:
          'Are you done making changes to everything you needed to and you are ready to publish the whole site?',
        showCancelButton: true,
        confirmButtonText: "Yup! I'm ready!",
        cancelButtonText: 'Not yet',
        confirmButtonColor: '#5a5a5a',
        cancelButtonColor: '#a31d21',
      }).then(value => {
        if (value.isConfirmed) {
          Axios.post(
            `https://api.netlify.com/build_hooks/${netlifyBuildHook}`
          )
            .then(response => {
              if (response.status === 200) {
                Swal.fire({
                  icon: 'success',
                  title: 'Your site is currently being published.',
                  confirmButtonColor: '#5a5a5a',
                  text:
                    "Feel free to walk away from your computer now and get ya a sandwich of sumpin'. You could shut your computer down if you want. It's gonna happen no matter what you do. Hope you did everything right... If you're worried my number is 812-204-0200, ask for Scott.",
                }).then(() => {
                  window.location.href = thisPage;
                });
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          Swal.fire({
            title: 'Websites are hard.',
            confirmButtonColor: '#5a5a5a',
            text:
              "That's ok. You weren't ready. I understand. It's no big deal.",
          });
        }
      });
    },
  };
}
