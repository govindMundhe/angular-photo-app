import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
  imports:[CommonModule],
  standalone: true,
})
export class PhotoDetailsComponent implements OnInit {
  photo?: Photo;

  constructor(private route: ActivatedRoute, private photoService: PhotoService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.photoService.getPhotoById(+id!).subscribe((data: Photo) => {
      this.photo = data;
    });
  }
}
