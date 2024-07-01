import { Preview } from '@creatomate/preview';

import './style.css';

let preview: Preview | undefined;

document.addEventListener('DOMContentLoaded', function() {
  preview = new Preview(document.querySelector('#container'), 'player', 'public-7p7n35m68yzvbgrug2gfamfo');

  // Switch to video 1
  document.querySelector('#button-1').addEventListener('click', async () => {
    await preview.setModifications({
      'video': 'https://cdn.creatomate.com/demo/house-1.mp4',
    });
  });

  // Delete video
  document.querySelector('#button-2').addEventListener('click', async () => {
    await preview.setModifications({});
  });

  // Switch to video 2
  document.querySelector('#button-3').addEventListener('click', async () => {
    await preview.setModifications({
      'video': 'https://creatomate-static.s3.us-west-2.amazonaws.com/video1_for_campaign_49.mp4',
    });
  });

  preview.onReady = async () => {

    await preview.setSource({
      'output_format': 'mp4',
      'width': 1080,
      'height': 1080,
      'frame_rate': '60 fps',
      'duration': 11.5,
      'snapshot_time': 3.78,
      'elements': [
        {
          'id': 'e11cc686-d6da-4bc9-a830-64142202d3cf',
          'type': 'shape',
          'track': 2,
          'time': 0,
          'width': '100%',
          'height': '100.0001%',
          'x_anchor': '50%',
          'y_anchor': '50%',
          'fill_color': [
            {
              'time': 0,
              'value': '#000000',
            },
            {
              'time': 4.345,
              'easing': 'steps',
              'value': '#ffffff',
            },
          ],
          'path': 'M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 Z',
        },
        {
          'id': 'ecf1a01d-ff16-4b5f-a58c-a4998b02e502',
          'type': 'video',
          'track': 3,
          'time': 0,
          'duration': 5.89,
          'dynamic': true,
          'width': [
            {
              'time': 0,
              'easing': 'steps(1)',
              'value': '45.2062%',
            },
            {
              'time': 0.5,
              'easing': 'steps(1)',
              'value': '78.9826%',
            },
            {
              'time': 0.9,
              'easing': 'steps(1)',
              'value': '85.0283%',
            },
            {
              'time': 1.2,
              'easing': 'steps(1)',
              'value': '100%',
            },
            {
              'time': 4.457,
              'easing': 'steps(1)',
              'value': '78.9826%',
            },
          ],
          'height': [
            {
              'time': 0,
              'easing': 'steps(1)',
              'value': '45.2062%',
            },
            {
              'time': 0.5,
              'easing': 'steps(1)',
              'value': '78.9826%',
            },
            {
              'time': 0.9,
              'easing': 'steps(1)',
              'value': '85.0283%',
            },
            {
              'time': 1.2,
              'easing': 'steps(1)',
              'value': '100%',
            },
            {
              'time': 4.457,
              'easing': 'steps(1)',
              'value': '78.9826%',
            },
          ],
          'clip': true,
          'color_filter': [
            {
              'time': 3.078,
              'easing': 'steps',
              'value': 'invert',
            },
            {
              'time': 3.261,
              'easing': 'steps',
              'value': 'grayscale',
            },
            {
              'time': 3.771,
              'value': 'grayscale',
            },
            {
              'time': 4.457,
              'easing': 'steps',
              'value': 'none',
            },
          ],
          'color_filter_value': [
            {
              'time': 3.078,
              'easing': 'steps',
              'value': 0,
            },
            {
              'time': 3.261,
              'easing': 'steps',
              'value': 100,
            },
            {
              'time': 3.771,
              'value': 100,
            },
            {
              'time': 4.457,
              'easing': 'steps',
              'value': 100,
            },
          ],
          'color_overlay': [
            {
              'time': 3.078,
              'value': 'rgba(244,65,80,0)',
            },
            {
              'time': 3.26,
              'easing': 'steps',
              'value': 'rgba(244,65,80,0.6)',
            },
            {
              'time': 3.771,
              'easing': 'steps',
              'value': 'rgba(244,65,80,0)',
            },
            {
              'time': 4.457,
              'easing': 'steps',
              'value': 'rgba(244,65,80,0)',
            },
          ],
          'blur_radius': [
            {
              'time': 0,
              'easing': 'steps',
              'value': 20,
            },
            {
              'time': 0.5,
              'easing': 'steps',
              'value': 10,
            },
            {
              'time': 0.9,
              'value': 0,
            },
          ],
          'source': '7347c3b7-e1a8-4439-96f1-f3dfc95c3d28',
          'trim_start': 0,
          'loop': true,
        },
        {
          'id': '6ecfa5bd-4a8f-4891-9001-b1d4239f0d1c',
          'type': 'shape',
          'track': 3,
          'time': 4.89,
          'width': [
            {
              'time': 0.84,
              'easing': 'steps(1)',
              'value': '78.9826%',
            },
            {
              'time': 1.19,
              'easing': 'steps(1)',
              'value': '85.0283%',
            },
            {
              'time': 1.49,
              'easing': 'steps(1)',
              'value': '100%',
            },
          ],
          'height': [
            {
              'time': 0.84,
              'easing': 'steps(1)',
              'value': '78.9826%',
            },
            {
              'time': 1.19,
              'easing': 'steps(1)',
              'value': '85.0283%',
            },
            {
              'time': 1.49,
              'easing': 'steps(1)',
              'value': '100%',
            },
          ],
          'x_anchor': '50%',
          'y_anchor': '50%',
          'fill_color': '#000000',
          'animations': [
            {
              'time': 0,
              'duration': 1,
              'transition': true,
              'type': 'flip',
              'fade': false,
              'y_rotation': '-180°',
            },
          ],
          'path': 'M 0 0 L 100 0 L 100 100 L 0 100 L 0 0 Z',
        },
        {
          'id': '54f16c97-bcb1-4cab-9c64-3b763bcc4b89',
          'name': 'Text-1',
          'type': 'text',
          'track': 4,
          'time': 1.8242,
          'duration': 2.7058,
          'dynamic': true,
          'width': '91.8839%',
          'height': '83.2626%',
          'x_scale': [
            {
              'time': 1.726,
              'easing': 'steps',
              'value': '100%',
            },
            {
              'time': 1.947,
              'easing': 'steps',
              'value': '50%',
            },
          ],
          'y_scale': [
            {
              'time': 1.726,
              'easing': 'steps',
              'value': '100%',
            },
            {
              'time': 1.947,
              'easing': 'steps',
              'value': '50%',
            },
          ],
          'x_alignment': '50%',
          'y_alignment': '50%',
          'fill_color': '#ffffff',
          'mask_mode': [
            {
              'time': 1.203,
              'value': 'alpha',
            },
            {
              'time': 1.436,
              'value': null,
            },
          ],
          'animations': [
            {
              'time': 0,
              'duration': 0.601,
              'easing': 'quadratic-out',
              'type': 'text-fly',
              'split': 'word',
              'track': 0,
            },
            {
              'time': 'end',
              'duration': 0.626,
              'easing': 'quadratic-out',
              'reversed': true,
              'type': 'text-wave',
              'order': 'random',
              'split': 'letter',
            },
          ],
          'text': 'Your Text And Video Here',
          'font_weight': '800',
          'line_height': '87%',
        },
        {
          'id': '00c1c5a0-59c9-43c2-a3a9-af5f59f255b5',
          'name': 'Text-2',
          'type': 'text',
          'track': 4,
          'time': 5.38,
          'duration': 2.7862,
          'dynamic': true,
          'y': '53.9933%',
          'width': '76.9299%',
          'height': '47.1794%',
          'x_scale': [
            {
              'time': 0,
              'value': '100%',
            },
            {
              'time': 'end',
              'easing': 'linear',
              'value': '120%',
            },
          ],
          'y_scale': [
            {
              'time': 0,
              'value': '100%',
            },
            {
              'time': 'end',
              'easing': 'linear',
              'value': '120%',
            },
          ],
          'x_alignment': '50%',
          'y_alignment': '50%',
          'fill_color': [
            {
              'time': 0,
              'easing': 'linear',
              'value': [
                {
                  'offset': '0%',
                  'color': '#5352ed',
                },
                {
                  'offset': '100%',
                  'color': 'rgba(132,0,11,1)',
                },
              ],
            },
            {
              'time': 0.558,
              'easing': 'linear',
              'value': [
                {
                  'offset': '0%',
                  'color': 'rgba(255,71,87,1)',
                },
                {
                  'offset': '100%',
                  'color': '#84000b',
                },
              ],
            },
            {
              'time': 1.123,
              'easing': 'linear',
              'value': [
                {
                  'offset': '0%',
                  'color': '#5352ed',
                },
                {
                  'offset': '100%',
                  'color': 'rgba(132,0,11,1)',
                },
              ],
            },
            {
              'time': 1.599,
              'easing': 'linear',
              'value': [
                {
                  'offset': '0%',
                  'color': 'rgba(255,71,87,1)',
                },
                {
                  'offset': '100%',
                  'color': '#84000b',
                },
              ],
            },
          ],
          'fill_mode': 'linear',
          'fill_x0': [
            {
              'time': 0,
              'easing': 'linear',
              'value': '87.7128%',
            },
            {
              'time': 0.558,
              'easing': 'linear',
              'value': '5.6676%',
            },
            {
              'time': 1.123,
              'easing': 'linear',
              'value': '87.7128%',
            },
            {
              'time': 1.599,
              'easing': 'linear',
              'value': '5.6676%',
            },
          ],
          'fill_y0': [
            {
              'time': 0,
              'easing': 'linear',
              'value': '111.6481%',
            },
            {
              'time': 0.558,
              'easing': 'linear',
              'value': '90.1325%',
            },
            {
              'time': 1.123,
              'easing': 'linear',
              'value': '111.6481%',
            },
            {
              'time': 1.599,
              'easing': 'linear',
              'value': '90.1325%',
            },
          ],
          'fill_x1': [
            {
              'time': 0,
              'easing': 'linear',
              'value': '10.883%',
            },
            {
              'time': 0.558,
              'easing': 'linear',
              'value': '95.9372%',
            },
            {
              'time': 1.123,
              'easing': 'linear',
              'value': '10.883%',
            },
            {
              'time': 1.599,
              'easing': 'linear',
              'value': '95.9372%',
            },
          ],
          'fill_y1': [
            {
              'time': 0,
              'easing': 'linear',
              'value': '-15.7186%',
            },
            {
              'time': 0.558,
              'easing': 'linear',
              'value': '-14.5556%',
            },
            {
              'time': 1.123,
              'easing': 'linear',
              'value': '-15.7186%',
            },
            {
              'time': 1.599,
              'easing': 'linear',
              'value': '-14.5556%',
            },
          ],
          'animations': [
            {
              'time': 0,
              'duration': 0.601,
              'easing': 'quadratic-out',
              'type': 'text-fly',
              'split': 'word',
              'track': 0,
            },
            {
              'time': 'end',
              'duration': 1,
              'easing': 'quadratic-out',
              'reversed': true,
              'type': 'text-slide',
              'scope': 'split-clip',
              'split': 'letter',
              'direction': 'up',
            },
          ],
          'text': 'Create & Automate\n[size 150%]Video[/size]',
          'font_weight': '800',
          'letter_spacing': '-19%',
          'line_height': '96%',
        },
        {
          'id': '88f23609-cdd7-41d7-96a8-aa7ab0c21ac8',
          'type': 'composition',
          'track': 4,
          'time': 8.2803,
          'width': '46.1105%',
          'height': '14.4045%',
          'x_scale': [
            {
              'time': 1.831,
              'easing': 'steps',
              'value': '100%',
            },
            {
              'time': 2.105,
              'easing': 'steps',
              'value': '127%',
            },
            {
              'time': 2.327,
              'easing': 'steps',
              'value': '75%',
            },
          ],
          'y_scale': [
            {
              'time': 1.831,
              'easing': 'steps',
              'value': '100%',
            },
            {
              'time': 2.105,
              'easing': 'steps',
              'value': '127%',
            },
            {
              'time': 2.327,
              'easing': 'steps',
              'value': '75%',
            },
          ],
          'animations': [
            {
              'time': 0,
              'duration': 0.966,
              'easing': 'back-out',
              'type': 'slide',
              'distance': '30%',
              'direction': '180°',
            },
          ],
          'elements': [
            {
              'id': 'def71fed-c745-4f97-a9b9-7f4280b039ce',
              'type': 'shape',
              'track': 1,
              'time': 0,
              'x': '8.0366%',
              'width': '16.0731%',
              'height': '100%',
              'aspect_ratio': 0.8134,
              'x_anchor': '50%',
              'y_anchor': '50%',
              'fill_color': '#ffffff',
              'path': 'M 56.4198 14.5533 L 56.4198 0 L 0 0 L 0 100 L 56.4198 100 L 56.4198 85.4467 C 44.8629 85.4467 33.7773 81.71 25.6055 75.0633 C 17.4337 68.4167 12.8437 59.4 12.8437 50 C 12.8437 40.6 17.4337 31.5833 25.6055 24.9367 C 33.7773 18.29 44.8629 14.5533 56.4198 14.5533 Z M 56.4198 14.5533 L 56.4198 85.4467 C 67.9767 85.4467 79.0623 81.71 87.2341 75.0633 C 95.4059 68.4167 100 59.4 100 50 C 100 40.6 95.4059 31.5833 87.2341 24.9367 C 79.0623 18.29 67.9767 14.5533 56.4198 14.5533 Z',
            },
            {
              'id': 'c2edc7b3-db26-474e-aac7-3ab72dcce3c7',
              'type': 'text',
              'track': 2,
              'time': 0.86,
              'x': '59.3495%',
              'width': '81.3009%',
              'height': '100%',
              'x_alignment': '50%',
              'y_alignment': '50%',
              'fill_color': '#ffffff',
              'animations': [
                {
                  'time': 0,
                  'duration': 0.487,
                  'easing': 'quadratic-out',
                  'type': 'text-spin',
                  'split': 'letter',
                  'direction': 'up',
                },
              ],
              'text': 'Your Logo',
              'font_weight': '800',
              'letter_spacing': '-19%',
              'line_height': '96%',
              'text_wrap': false,
            },
          ],
        },
      ],
    });
  };
});
