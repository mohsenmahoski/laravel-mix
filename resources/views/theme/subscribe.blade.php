<div class="subscribe-line subscribe-line-image header-filter" data-parallax="true" style="background-image: url('{{ asset("images/theme/office.jpg")  }}');">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-md-offset-3">
					<div class="text-center">
						<h3 class="title withe">ثبت نام در اشتراک خبرنامه</h3>
						<p class="card-description withe">
							باثبت نام در خبرنامه مدرن تک از جدیدترین خبرهای دنیای فنااوری اطلاعات مطلع شوید و اولین فردی باشید محصولات جدید وبی تک دیدن می کند
						</p>
					</div>

					<div class="card card-raised card-form-horizontal">
						<div class="card-content">
							{{ Form::open(['route'=>'subscribe']) }}
							   <div class="row">
								   <div class="col-sm-4">
                                       {{ Form::submit('ثبت نام', ['class'=>'btn-primary btn btn-rose btn-block']) }}
								   </div>
							  
							       <div class="col-sm-8">
										<div class="input-group">
											<div class="form-group is-empty">
											 {{ Form::email('email' , null , ['class'=>'text-right form-control']) }}
											   <span class="material-input"></span>
											   <span class="material-input"></span>
											</div>
											<span class="input-group-addon">
												<i class="material-icons">mail</i>
											</span>
										</div>
							       </div>
							   </div>
							{{ Form::close() }}
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>