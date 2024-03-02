import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
  seekValue: number = 0;
  currentTime: number = 0;
  duration: number = 0;
  vol: number = 50;
  videoTitle: string = 'Video Title';
  videoAuthor: string = 'Author';
  videoLikeStatus: boolean = false;
  currentVid:number = 0;

  videoArray: Array<string> = [
    'https://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4',
    'https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/video/sintel-short.mp4',
  ];

  playPause(video: HTMLVideoElement) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  seekVideo(video: HTMLVideoElement, event: any) {
    video.currentTime = event.target.value;
  }

  adjustVol(video: HTMLVideoElement, event: any) {
    video.volume = event.target.value / 100;
    this.vol = event.target.value;
  }

  toggleVol(video: HTMLVideoElement) {
    video.muted = !video.muted;
  }

  onMetadataLoaded(video: HTMLVideoElement) {
    this.duration = video.duration;
  }

  onTimeUpdate(video: HTMLVideoElement) {
    this.currentTime = video.currentTime;
  }

  toggleLikeStatus() {
    this.videoLikeStatus = !this.videoLikeStatus;
  }

  prev(currentVid:number, video: HTMLVideoElement){
    this.currentVid = currentVid - 1;
    video.src = this.videoArray[this.currentVid];
  }

  next(vidIndex:number, video: HTMLVideoElement){
    this.currentVid = vidIndex + 1
    video.src = this.videoArray[this.currentVid];
  }

  formatTime(time: number): string {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
